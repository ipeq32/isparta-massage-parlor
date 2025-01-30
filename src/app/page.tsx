import FAQFeatures from "./_features/FAQ";
import HomeFeature from "./_features/Home";
import ReviewsFeature from "./_features/Reviews";

export default function Home() {
  return (
    <div className="mx-auto">
      <HomeFeature />
      <ReviewsFeature />
      <FAQFeatures />
    </div>
  );
}
