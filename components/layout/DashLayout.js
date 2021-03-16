import { useState } from "react";
import DashSidebar from "./DashSidebar";
import DashContentHeader from "./DashContentHeader";

export function DashLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-full flex">
      {/* Nav ======================================================================================= */}
      <DashSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full">
        {/* Content-Header ======================================================================================= */}
        <DashContentHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Content ======================================================================================= */}
        <div className="bg-gray-100 min-h-screen pt-24 pb-14 border-l">
          {children}
        </div>
      </div>
    </div>
  );
}
