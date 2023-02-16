import Card from "../Card/Card";
import cap from "../../assets/cap.webp";
import socks from "../../assets/socks.webp";
import tshirt from "../../assets/tshirt.webp";

const Accessories = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap py-8 text-head border-black w-full justify-center ">
        Shop Accessories
      </div>
      <div className={"flex"}>
        <Card src={cap} title={"Tsuki Logo Embroidered Cap"} price={"34.00"} />
        <Card src={socks} title={"Tsuki Socks"} price={"12.00"} />
        <Card
          src={tshirt}
          title={"Mischief Embroidered T-Shirt"}
          price={"22.00"}
        />
      </div>
    </div>
  );
};

export default Accessories;
