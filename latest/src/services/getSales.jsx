import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export const getSales = async () => {
  try {
    const response = await axios.get(`${API_BASE}/sales`);
    // Ensure response is always an array
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching sales:", error);
    return []; // fallback to empty array
  }
};