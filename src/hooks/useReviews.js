import { useEffect, useState } from "react";
// create useApartments hook
const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const url = "https://fathomless-anchorage-68450.herokuapp.com/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);
  return [isLoading, reviews, setReviews];
};

export default useReviews;
