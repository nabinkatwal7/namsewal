import Carousel from "./Carousel";
import Gallery from "./Gallery";
import Grid from "./Grid";

const HomeWrapper = () => {
  return (
    <div className="flex w-screen flex-col gap-1 overflow-x-hidden">
      <Carousel />
      <Grid />
      <p>Category</p>
      <Gallery />
    </div>
  );
};

export default HomeWrapper;
