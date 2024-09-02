import Carousel from "./Carousel";
import Category from "./Category";
import Gallery from "./Gallery";
import Grid from "./Grid";
import HeroSection from "./Video";

const HomeWrapper = () => {
  return (
    <div className="flex w-screen flex-col gap-1 overflow-x-hidden">
      <HeroSection />
      <Grid />
      <Category />
      <Carousel />
      <Gallery />
    </div>
  );
};

export default HomeWrapper;
