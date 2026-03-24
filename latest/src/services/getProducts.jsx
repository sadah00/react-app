import axios from "axios";

const API_URL =import.meta.env.VITE_PRODUCTS_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};