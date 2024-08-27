import Carousel from "./Carousel";

const HomeWrapper = () => {
  return (
    <div className="flex h-screen w-screen flex-col gap-4 overflow-x-hidden">
      <Carousel />
      <p>grid</p>
      <p>Category</p>
      <p>Gallery</p>
    </div>
  );
};

export default HomeWrapper;
