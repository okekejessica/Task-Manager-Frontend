import { useEffect, useState } from "react";

//  Custom hook to fetch data from a provided URL inside a container called baseURL in app.jsx
export const useFetch = (url) => {
  const [data, setData] = useState(null); // State to store the fetch data, initiallnull

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to perform side effects (data fetchching in this case)
  useEffect(() => {
    const getData = async () => {
      // Async function to fetch data
      const response = await fetch(url); // Fetch data from the provided URL
      const jData = await response.json(); // Parse response JSON data and keep inside jData

      setData(jData.tasks ? jData.tasks : jData.task); // update the (data) state that was formally null with setData... updating data with fetched data
      setLoading(false);
      console.log(jData);
    };

    setTimeout(async () => {
      try {
        await getData(); // Invoking the getData function
      } catch (error) {
        console.log(error);
        setError("Opps something went wrong");
        setLoading(false)
      }
    }, 3000);
  }, []);

  return { data, setData, loading, error }; // Return an object containing  data
};
