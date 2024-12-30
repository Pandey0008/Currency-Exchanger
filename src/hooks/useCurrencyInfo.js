// Importing necessary hooks from React
import { useEffect, useState } from "react";

// Custom hook to fetch currency conversion data based on the provided currency
function useCurrencyInfo(currency) {
  // State to store the fetched currency data
  const [data, setData] = useState({});

  // useEffect hook to fetch data when the currency value changes
  useEffect(() => {
    // Fetching the currency data from the API based on the currency parameter
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // Parsing the response to JSON
      .then((res) => {
        // Updating the state with the fetched data for the specific currency
        setData(res[currency]);
      })
      .catch((error) => {
        // Handling any errors during the fetch
        console.error("Error fetching currency data:", error);
      });
  }, [currency]); // Dependency array to re-fetch data whenever the currency changes

  // Logging the fetched data (for debugging purposes)
  console.log(data);

  // Returning the fetched currency data
  return data;
}

export default useCurrencyInfo;
