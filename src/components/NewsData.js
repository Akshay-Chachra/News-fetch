import React, { useState, useEffect } from "react";
import News from "./News";
import Spinner from "./Spinner";

function NewsData(props) {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(0);
  const [totalresults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  

  const fetchData = async () => {
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const API_URL = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setTotalResults(data.totalResults);
    setPage(page+1);
    setLoading(false);
    return setUser(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevious = async () => {
    if (page <= 1) {
    } else {
      const API_KEY = "fb75881c55f84045934af853a53c42e3";
      const API_URL = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&page=${
      page - 1
      }&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setPage(page - 1);
      setLoading(false);
      return setUser(data.articles);
    }
  };

  const handleNext = async () => {
    if (page + 1 > Math.ceil(totalresults / props.pageSize)) {
    } else {
      
      const API_KEY = "fb75881c55f84045934af853a53c42e3";
      const API_URL = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setLoading(false);
      setPage(page + 1);
      return setUser(data.articles);
    }
  };

  const categories = async () =>{

    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const API_URL = `https://newsapi.org/v2/everything?q=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setTotalResults(data.totalResults);
    setLoading(false);
    return setUser(data.articles);
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title text-center my-5">News Fetch - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} headlines</h1>
        {loading && <Spinner />}
        {user &&
          !loading&&user.map((article, index) => {
            return (
              <News
                key={index}
                id={index}
                title={article.title ? article.title.slice(0, 45) + "..." : ""}
                description={
                  article.content
                    ? article.content.slice(0, 150) + "..."
                    : "Check Details"
                }
                imgurl={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://img.freepik.com/free-vector/digital-realistic-earth-global-technology-background_1017-33685.jpg?w=1380&t=st=1671542757~exp=1671543357~hmac=44168c14a90036e105bbdaf22ed81da0e9464b3f5ab8a192343bae72d54933d8"
                }
                detail={article.url}
                author={article.author ? "News By: " + article.source.name : ""}
                time= {"Date: " + article.publishedAt.slice(0,10)}
              />
            );
          })}
      </div>
      <div className="container my-5 d-flex justify-content-between">
        <button
          disabled={page <= 1}
          className="btn prevNext left"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalresults / props.pageSize)}
          d-flex
          justify-content-between
          className="btn prevNext right"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default NewsData;
