import React from "react";
import { useSales } from "../hooks/useGetSales";
import SalesTable from "../components/SalesTable";

const SalesPage = () => {
  const { sales, loading, error } = useSales();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching sales.</p>;

  // Here we ensure sales is passed as a prop
  return <SalesTable sales={sales} />;
};

export default SalesPage;

