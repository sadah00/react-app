import axios from 'axios';

const product_url = import.meta.env.VITE_PRODUCTS_URL;

export const createProductService = async (productData) => {
  try {
    const response = await axios.post(product_url, productData);
    console.log("test");
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

