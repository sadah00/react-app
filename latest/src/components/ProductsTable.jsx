import React from "react";

const ProductsTable = ({ products }) => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow m-5">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Buying Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Selling Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.buying_price}</td>
                <td className="px-6 py-4">{product.selling_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
