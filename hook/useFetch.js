import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://furniture-app-api.onrender.com/api/products');
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      if (err.response) {
        // The request was made, but the server responded with an error status code (e.g., 404, 500).
        console.error("Server Error:", err.response.data);
      } else if (err.request) {
        // The request was made, but no response was received.
        console.error("No Response Received:", err.request);
      } else {
        // Something else happened while setting up the request.
        console.error("Error:", err.message);
      }
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
