import React from 'react'

const ProductsTable = () => {
  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-400 w-100">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Prod ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Buying</th>
            <th className="border border-gray-400 px-4 py-2">Selling Price</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center">
            <td className="border border-gray-400 px-4 py-2">1</td>
            <td className="border border-gray-400 px-4 py-2">Milk Cream</td>
            <td className="border border-gray-400 px-4 py-2">360</td>
            <td className="border border-gray-400 px-4 py-2">540</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable