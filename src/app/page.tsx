import FAQFeatures from "./_features/FAQ";
import HomeFeature from "./_features/Home";
import ReviewsFeature from "./_features/Reviews";
import MassageServices from "./_features/Services";

export default function Home() {
  return (
    <div className="mx-auto">
      <HomeFeature />
      <MassageServices />
      <ReviewsFeature />
      <FAQFeatures />
    </div>
  );
}
