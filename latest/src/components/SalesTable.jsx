// src/components/SalesTable.jsx
import React from "react";

const SalesTable = ({ sales }) => {
  // Safeguard: sales might not be an array
  if (!Array.isArray(sales) || sales.length === 0) {
    return <p>No sales available.</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow m-5">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Sales ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Created At
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">{sale.id}</td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {sale.product_id}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {sale.quantity}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {sale.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <table className="min-w-full bg-white border rounded shadow">
    //   <thead>
    //     <tr>
    //       <th>Sales ID</th>
    //       <th>Product ID</th>
    //       <th>Quantity</th>
    //       <th>Created At</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {sales.map((sale) => (
    //       <tr key={sale.id}>
    //         <td>{sale.id}</td>
    //         <td>{sale.product_id}</td>
    //         <td>{sale.quantity}</td>
    //         <td>{sale.created_at}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default SalesTable;
