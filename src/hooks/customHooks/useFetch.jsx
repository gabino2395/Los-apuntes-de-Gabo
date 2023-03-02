import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fechtData = async () => {
      setIspending(true)
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error: " : res.status,
          };
        }

        let data = await res.json();
        setIspending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIspending(true);
        setError(err);
      }
    };
    fechtData(url)
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
