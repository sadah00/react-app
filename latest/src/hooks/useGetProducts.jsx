import React from 'react'
import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
}

export default useGetProducts
