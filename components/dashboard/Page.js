import { useState, useEffect } from "react";

export const Page = ({ status }) => {
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
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                Jane Cooper
              </div>
              <div className="text-sm text-gray-500">
                jane.cooper@example.com
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            Regional Paradigm Technician
          </div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}`}
          >
            {status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          Admin
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Edit
          </a>
        </td>
      </tr>
    </tbody>
  );
};
