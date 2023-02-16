import logo from "../../assets/logo.avif";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { RxCaretRight } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col">
        <div className="hidden  md:flex lg:flex w-full  justify-center tracking-widest leading-4 bg-primary text-xs items-center py-1 px-5">
          <p className="font-bold">FREE WORLDWIDE SHIPPING OVER $175</p>
          <p className="mx-5 font-normal text-ghost"> | </p>
          <p className="font-normal">USE CODE: TSUKI</p>
        </div>
        <div className="flex h-1/4 w-full justify-between lg:py-3">
          <div
            className="flex w-full justify-center z-1 lg:py-0 py-3"
            onClick={() => {
              navigate("/");
            }}
          >
            <img className=" lg:w-40 md:w-40 w-32" src={logo} />
          </div>
          <div className="hidden lg:flex md:flex absolute h-48 bottom-0 top-0 right-0  justify-end items-center z-0">
            <ul className="flex w-full gap-4 px-10">
              <li
                className="hover:text-primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
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
          <div className="absolute top-0 w-full justify-between items-center h-32 z-0 sm:px-5 px-4 lg:hidden md:hidden sm:flex flex">
            <div>
              <ul className="flex sm:gap-6  gap-4">
                <li className="hover:text-primary">
                  <BiSearch size={"23px"} />
                </li>
                <li className="hover:text-primary">
                  <FiUser size={"23px"} />
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex sm:gap-6  gap-4">
                <li className="hover:text-primary">
                  <FiShoppingCart size={"23px"} />
                </li>
                <li className="hover:text-primary">
                  <GiHamburgerMenu size={"23px"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex md:flex border-y-1 border-black w-full justify-center items-center ">
          <ul className="flex gap-9 flex-wrap justify-center items-center py-3">
            <li className="group flex cursor-pointer ml-2 hover:text-ghostlight items-center group tracking-wide">
              HOME ホームページ
              <span>
                <RxCaretRight
                  className="group-hover:rotate-90 transition-all"
                  size={"20px"}
                />
              </span>
            </li>
            <li className="flex cursor-pointer ml-2 hover:text-ghostlight items-center tracking-wide">
              SALE 大売り出し
            </li>
            <li className="group flex cursor-pointer ml-2 hover:text-ghostlight items-center tracking-wide">
              SHOP ALL すべての商品
              <span>
                <RxCaretRight
                  className="group-hover:rotate-90 transition-all"
                  size={"20px"}
                />
              </span>
            </li>
            <li className="group ml-2  flex cursor-pointer hover:text-ghostlight items-center tracking-wide">
              COLLECTIONS コレクション
              <span>
                <RxCaretRight
                  className="group-hover:rotate-90 transition-all"
                  size={"20px"}
                />
              </span>
              <div className="w-50 bg-black  hidden z-10 collection-hover:flex">
                Hello World
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
