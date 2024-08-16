import { useState, useEffect } from 'react';

// 4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set to an empty array on error
      }
    };
    fetchData();
  }, [url]);

  return { data };
};
