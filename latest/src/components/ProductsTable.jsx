import React from 'react'

const ProductsTable = () => {
  return (
    <div>
      <div>
          <table>
              <thead>
                  <tr>
                    <th>Prod ID</th>
                    <th>Name</th>
                    <th>Buying</th>
                    <th>Selling price</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <td>1</td>
                    <td>Milk Cream</td>
                    <td>360</td>
                    <td>540</td>
                </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default ProductsTable