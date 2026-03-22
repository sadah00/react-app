import React from "react";
import { useState, useEffect } from "react";
import { getSales } from "../services/getSales";

export const useSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      try {
        const data = await getSales();
        setSales(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  return { sales, loading, error };
};