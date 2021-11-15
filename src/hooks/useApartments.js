import { useEffect, useState } from "react";
// create useApartments hook
const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const url = "https://fathomless-anchorage-68450.herokuapp.com/apartments";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setIsLoading(false);
      });
  }, []);
  return [isLoading, apartments, setApartments];
};

export default useApartments;
