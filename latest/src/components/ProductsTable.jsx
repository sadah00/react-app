import React from 'react'

const ProductsTable = ({ products }) => {
  return (
    <div className="p-4">
      <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Buying</th>
          <th>Selling</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.buying_price}</td>
            <td>{product.selling_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ProductsTable