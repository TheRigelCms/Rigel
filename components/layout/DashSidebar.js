import Link from "next/link";
import { BsFilePost } from "react-icons/bs";
import { VscSymbolClass, VscTag } from "react-icons/vsc";
import { AiOutlineComment } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import ActiveLink from "../../utils/Links";

const DashSidebar = ({ isOpen, setIsOpen }) => {
  let activeClass =
    "text-blue-600 transform scale-110 transition-all duration-500";

  return (
    <div
      className={
        isOpen
          ? "h-screen fixed sm:static overflow-y-hidden opacity-100 w-64 transition-all duration-500 shadow-xl sm:shadow-none bg-white z-50"
          : "h-screen fixed sm:static overflow-y-hidden opacity-0 w-0 transition-all duration-500"
      }
    >
      <div className="flex justify-between items-center px-10 h-16 mb-7 sm:fixed">
        <ActiveLink activeClassName={activeClass} href="/panel">
          <Link href="/">
            <h2 className="font-bold cursor-pointer text-blue-600">Rigel</h2>
          </Link>
        </ActiveLink>
        <IoMdClose
          size={23}
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          close
        </IoMdClose>
      </div>
      <div className="px-10 text-sm h-full sm:fixed sm:top-24">
        {/* ================================================================================================================ */}
        <small className="block mb-6 text-gray-500">Blog</small>
        {/*  */}
        <ActiveLink activeClassName={activeClass} href="/panel/posts">
          <a className="flex items-center mb-6">
            <BsFilePost fill="currentColor" size={21} className="mr-3" />
            Posts
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={activeClass} href="/panel/categories">
          <a className="flex items-center mb-6 ">
            <VscSymbolClass fill="currentColor" size={21} className="mr-3" />
            Categories
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={activeClass} href="/panel/pages">
          <a className="flex items-center mb-6 ">
            <VscTag fill="currentColor" size={21} className="mr-3" />
            Pages
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={activeClass} href="/panel/comments">
          <a className="flex items-center mb-6 ">
            <AiOutlineComment fill="currentColor" size={21} className="mr-3" />
            Comments
          </a>
        </ActiveLink>

        {/* ================================================================================================================= */}
        <small className="block mb-6 text-gray-500">Administration</small>
        {/*  */}
        <ActiveLink activeClassName={activeClass} href="/panel/users">
          <a className="flex items-center mb-6 ">
            <FaUsers fill="currentColor" size={21} className="mr-3" />
            Users
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={activeClass} href="/panel/applications">
          <a className="flex items-center mb-6">
            <SiBmcsoftware fill="currentColor" size={21} className="mr-3" />
            Applications
          </a>
        </ActiveLink>

        {/* ================================================================================================================= */}
        <small className="block mb-6 text-gray-500">Developer</small>
        {/*  */}
        <ActiveLink activeClassName={activeClass} href="/panel/playground">
          <a className="flex items-center mb-6">
            <GrGraphQl fill="currentColor" size={21} className="mr-3" />
            Playground
          </a>
        </ActiveLink>
      </div>

      <div className="p-2 max-h-14 fixed bottom-0 mb-5 pl-10">
        <button className="transform transition duration-500 hover:scale-105 flex items-center justify-center w-40x px-4 py-1 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none">
          <span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </span>
          <span> Logout </span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;
