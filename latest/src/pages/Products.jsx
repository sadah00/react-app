import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsHero from "../components/ProductsHero";
import ProductsTable from "../components/ProductsTable";
import useGetProducts from "../hooks/useGetProducts";
import { useCreateProducts } from "../hooks/useCreateProducts";
import ProductsForm from "../components/ProductsForm";

const Products = () => {
 
  const { products } = useGetProducts();
  const productHook = useCreateProducts();

  
  return (
    <div>
      <div>
        <ProductsHero />
      </div>
      <div>
        <ProductsForm 
        {...productHook}

        />
      </div>
      <div>
        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default Products;
