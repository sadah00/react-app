import React from 'react'

const ProductsForm = ({ productData, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-xl mx-auto bg-gray-100 p-10 rounded-2xl shadow-lg">
        
        <input 
        type="text" 
        name="name"
        value={productData.name}
        onChange={handleChange}
        className='border p-2 rounded' 
        placeholder='Product Name'
        />

        <input 
        type="number" 
        name="buying_price"
        value={productData.buying_price}
        onChange={handleChange}
        className='border p-2 rounded' 
        placeholder='Buying Price'
        />

        <input 
        type="number" 
        name="selling_price" 
        value={productData.selling_price}
        onChange={handleChange}
        className='border p-2 rounded' 
        placeholder='Selling Price'
        />
        <button type='submit' onClick={handleSubmit} className='bg-purple-700 text-white p-2 rounded'>Add Product</button>
      </form>
    </div>
  )
}

export default ProductsForm
