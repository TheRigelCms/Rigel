import { useState, useEffect } from "react";
import Link from "next/link";

export const Post = ({ status, article }) => {
  const [statusClass, setStatusClass] = useState("");

  useEffect(() => {
    if (status === "Draft") {
      setStatusClass("bg-blue-100 text-blue-800");
    } else if (status === "Published") {
      setStatusClass("bg-green-100 text-green-800");
    } else {
      setStatusClass("bg-gray-100 text-gray-800");
    }
  }, [status]);

  return (
    <Link href={`/panel/posts/${article.id}`} as={`/panel/posts/${article.id}`}>
      <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-white cursor-pointer">
        {/* */}
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2 w-1/2">
            <div className="text-gray-400">Category</div>
            <div className="text-lg font-semibold ellipse-text">
              {article.name}
            </div>
            <div className="text-sm text-justify pr-5 ellipse-text">
              {article.address.city}
            </div>
          </div>
          <div className="w-1/2 flex items-center">
            <img
              src="/image/samp.jpg"
              className="shadow-lg rounded-md"
              alt="post"
            />
          </div>
        </div>
        {/* */}
        <div className="mt-5 flex justify-between">
          <div>
            <span
              className={`inline-block relative px-2 text-sm font-semibold ${statusClass} rounded`}
            >
              {status}
            </span>
            <small className="ml-3 text-gray-400">from 2021</small>
          </div>
          <a
            href="#"
            className="font-semibold text-sm text-blue-600 hover:text-blue-800"
          >
            Edit
          </a>
        </div>
      </div>
    </Link>
  );
};
