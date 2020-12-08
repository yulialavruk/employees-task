import { useState, useEffect } from "react";

export const UseEmployees = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://yalantis-react-school-api.yalantis.com/api/task0/users"
        );

        if (response.status === 200) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("error");
        }
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
