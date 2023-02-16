import main from "../assets/main.webp";
import Accessories from "../components/Accessories/Accessories";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={main} />
      </div>
      <Accessories />
      <Carousel />
    </div>
  );
};

export default Home;
