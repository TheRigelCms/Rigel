import { Category } from "../../../components/dashboard";

const Index = () => {
  return (
    <div className="content">
      <div>
        <div className="text-2xl font-semibold mb-4 ">Categories</div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">List of Categories</h2>
        <button
          type="submit"
          className="block btn bg-blue-600 text-white text-secondary"
        >
          Add Category
        </button>
      </div>
      {/*  */}
      <div className="flex flex-col pt-7">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                {/* =========== */}
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Slug
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {/* =========== */}
                <Category />
                <Category />
                <Category />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
