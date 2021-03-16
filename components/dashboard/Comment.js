export const Comment = () => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">Victor Hugo</div>
          <div className="text-sm text-gray-500">victorhugo@gmail.com</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
          I like your post but , i think you can go much more in deep about this
          subject...
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Show
          </a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" className="text-red-600 hover:text-red-900">
            Delete
          </a>
        </td>
      </tr>
    </tbody>
  );
};
