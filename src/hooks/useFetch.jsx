import { useState, useEffect } from "react";

export default function useFetch(url, type) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json[type]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, erro };
}
