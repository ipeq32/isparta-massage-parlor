import { GoogleReview } from "@/app/_features/Reviews";
import Logger from "@/lib/logger";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "API key or placeId not configured." },
      { status: 500 }
    );
  }

  // Cache süresi dolduysa, yeniden Google'a istek at
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=review,rating,user_ratings_total&language=tr`;
    const response = await fetch(url);

    if (!response.ok) {
      Logger.log(`Google API error: ${response.statusText}`, "error");
      throw new Error(`Google API error: ${response.statusText}`);
    }
    //https://www.google.com/search?sca_esv=7574200c66593964&sxsrf=AHTn8zo---xTR5kf09wQSzyzLU66O6CDOg:1737908986418&uds=ABqPDvztZD_Nu18FR6tNPw2cK_RRPQpKRWOzt18q3B9M7663Gydc0NPVprPwUOzu6r1zuk-GqFjG1m_JxSKHcd73cojBHxhXasROpqXwQRwrMC8p04FFfWs0HkSx3C9Ehuq_BkQLtr4KhZSl3uPYSC-uMvIf-cWPUQ&q=Rose+Town+Spa+Ve+Masaj+Salonu+Yorumlar&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzQ6rscYT32GE02aFvI7UcNPHsM-_7C9UoUiKBKplgTSFTuBTht9U_SSRkX2bVf6QizEb0PSWArvzam6Xk0dZtuiI51LCVkwHY1PgCeGf-MUqYjTD9Q%3D%3D&hl=tr-TR&sa=X&ved=2ahUKEwj4_qW-55OLAxUnm_0HHQRKMt4Q_4MLegQIRBAN&biw=1295&bih=778&dpr=1.25
    const data = await response.json();
    const allReviews = data?.result?.reviews || [];

    const filteredReviews = allReviews.filter(
      (review: GoogleReview) => review.rating >= 2
    );
    console.log(filteredReviews);
    Logger.log("allReviews", "success");

    return NextResponse.json({ reviews: filteredReviews });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    Logger.log(`Google API error: ${errorMessage}`, "error");
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
