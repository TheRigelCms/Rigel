import { BsChevronDoubleLeft } from "react-icons/bs";

const DashContentHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div className="h-16 w-full flex items-center justify-between border-high_muted bg-white shadow-lg fixed z-40 border-l">
      <BsChevronDoubleLeft
        size={19}
        className={
          isOpen
            ? "cursor-pointer ml-7 transform rotate-0 transition-all duration-500"
            : "cursor-pointer ml-7 transform rotate-180 transition-all duration-500"
        }
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="flex items-center fixed right-0">
        <div className="mr-12 flex justify-end items-center text-blue-600 w-48">
          <p className="text-sm font-semibold"> Hi, lionel</p>

          <div className="relative">
            <button className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring ml-3.5">
              <img
                className="object-cover w-9 h-9 rounded-full"
                src="/icons/ellipse.png"
                alt="user"
              />
            </button>
            <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping" />
            <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashContentHeader;
