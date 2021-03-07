import { useState, useEffect } from "react";
import Axios from "axios";

export const useFetch = (url = "", defaultData = null) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const startLoading = () => setLoading;

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data: response } = await Axios.get(url);
      setData(response);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return [fetchData, data, loading, error];
};
