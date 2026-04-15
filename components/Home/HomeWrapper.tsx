import Carousel from "./Carousel";
import Category from "./Category";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Grid from "./Grid";
import Testimonials from "./Testimonials";
import HeroSection from "./Video";
import WhyChooseUs from "./WhyChooseUs";

const HomeWrapper = () => {
  return (
    <div className="flex w-full flex-col gap-8 overflow-x-hidden">
      <HeroSection />
      <Grid />
      <WhyChooseUs />
      <Category />
      <Carousel />
      <Testimonials />
      <Gallery />
      <FAQ />
    </div>
  );
};

export default HomeWrapper;
