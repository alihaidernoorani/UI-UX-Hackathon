import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import TopCategories from "./components/TopCategories";
import StyleProducts from "./components/StyleProducts";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <TopCategories/>
      <StyleProducts/>
    </div>
  );
}