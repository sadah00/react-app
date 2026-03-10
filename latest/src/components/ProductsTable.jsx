import React from 'react'

const ProductsTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>$19.99</td>
            <td>A great product</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$29.99</td>
            <td>Another great product</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
