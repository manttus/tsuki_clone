import logo from "../../assets/logo.avif";
import main from "../../assets/main.webp";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { RxCaretRight } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full  justify-center tracking-widest leading-4 bg-primary text-xs items-center py-1 px-5">
        <p className="font-bold">FREE WORLDWIDE SHIPPING OVER $175</p>
        <p className="mx-5 font-normal text-ghost"> | </p>
        <p className="font-normal">USE CODE: TSUKI</p>
      </div>
      <div className="flex h-1/4 w-full justify-between py-3 px-8">
        <div className="flex w-full justify-center z-1">
          <img className="w-40" src={logo} />
        </div>
        <div className="absolute h-48 bottom-0 top-0 right-0 flex justify-end items-center pr-10 z-0">
          <ul className="flex gap-4">
            <li className="hover:text-primary">
              <FiUser size={"25px"} />
            </li>
            <li className="hover:text-primary">
              <BiSearch size={"25px"} />
            </li>
            <li className="hover:text-primary">
              <FiShoppingCart size={"25px"} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex border-y-1 border-black h-14 w-full justify-center items-center">
        <ul className="flex gap-14">
          <li className="flex cursor-pointer hover:text-ghostlight items-center">
            HOME ホームページ
            <span>
              <RxCaretRight
                className="hover:rotate-90 transition-all"
                size={"20px"}
              />
            </span>
          </li>
          <li className="flex cursor-pointer hover:text-ghostlight items-center">
            SALE 大売り出し
          </li>
          <li className="shop flex cursor-pointer hover:text-ghostlight items-center group">
            SHOP ALL すべての商品
            <span>
              <RxCaretRight
                className="shop-hover:rotate-90 transition-all"
                size={"20px"}
              />
            </span>
          </li>
          <li className="group collection flex cursor-pointer hover:text-ghostlight items-center ">
            COLLECTIONS コレクション
            <span>
              <RxCaretRight
                className="collection-hover:rotate-90 transition-all"
                size={"20px"}
              />
            </span>
            <div className="w-50 bg-black hidden z-10 collection-hover:flex">
              Hello World
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src={main} />
      </div>
    </div>
  );
};

export default Navbar;
