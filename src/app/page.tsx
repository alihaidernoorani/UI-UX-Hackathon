import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import TopCategories from "./components/TopCategories";
import StyleProducts from "./components/StyleProducts";
import OurProducts from "./components/OurProducts";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <TopCategories/>
      <StyleProducts/>
      <OurProducts/>
    </div>
  );
}