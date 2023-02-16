import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImPinterest } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col lg:mt-32 md:mt-32 mt-52 pb-5">
      <div className="flex w-full lg:flex-row md:flex-row flex-col px-1">
        <div className="flex flex-col text-white py-16 px-12 text-[14px] font-semibold tracking-wider lg:w-1/2 md:1/2 w-full">
          NEWSLETTER
          <hr className="my-5 border-gray-500" tracking-wider />
          <p className="tracking-wide font-normal leading-6 text-justify">
            Subscribe to be the first to hear about our latest collections,
            offers and news about the brand.
          </p>
          <div className="flex w-full mt-5">
            <input className="bg-black border-1 w-full py-2 caret-white px-2 focus:ring-0 focus:outline-none" />
            <button className="bg-white text-[14px] text-black py-2 px-5 tracking-wider font-extrabold">
              JOIN
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white lg:py-16 md:py-16 pb-20  lg:pl-0 lg:px-10 md:pl-0 md:pr-10 px-12 text-[14px] font-semibold tracking-wider lg:w-1/2 md:1/2 w-full">
          GET SOCIAL WITH US
          <hr className="my-5 border-gray-500" tracking-wider />
          <div className="flex gap-6">
            <AiFillFacebook size={"18px"} />
            <AiOutlineTwitter size={"18px"} />
            <ImPinterest size={"18px"} />
            <AiOutlineInstagram size={"18px"} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 px-12 pb-10 leading-6">
        <p className="text-white text-[10px] tracking-widest">
          © TSUKI MARKET 2023
        </p>
        <p className="text-white text-[10px] tracking-widest">
          CUSTOMER SUPPORT & SHIPPING INFORMATION
        </p>
        <p className="text-white text-[10px] tracking-widest">ABOUT</p>
        <p className="text-white text-[10px] tracking-widest">COLLABORATIONS</p>
        <p className="text-white text-[10px] tracking-widest">
          WHOLESALERS & RETAILERS
        </p>
        <p className="text-white text-[10px] tracking-widest">
          TERMS & CONDITIONS
        </p>
        <p className="text-white text-[10px] tracking-widest">PRIVACY POLICY</p>
        <p className="text-white text-[10px] tracking-widest">
          POWERED BY SHOPIFY
        </p>
      </div>
    </div>
  );
};

export default Footer;
