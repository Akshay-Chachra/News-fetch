import React, { useState, useEffect } from "react";
import News from "./News";
import Spinner from "./Spinner";


function NewsData(props) {
  const [user, setUser] = useState([]);
  const [page ,setPage] = useState(0);
  const [totalresults , setTotalResults] = useState(0)
  const [loading , setLoading] = useState(false);

  const fetchData = async () => {
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const country = "us";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
    setLoading(true)
    const response = await fetch(API_URL);
    const data = await response.json();
    setTotalResults(data.totalResults)
    setLoading(false)
    return setUser(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevious = async () =>{
    
    if (page <= 1){

    }else{
    
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const country = "us";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page - 1}&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
    setLoading(true)
    const response = await fetch(API_URL);
    const data = await response.json();
    setPage(page - 1)
    setLoading(false)
    return setUser(data.articles);
    }
  }

  const handleNext = async () =>{
    if (page + 1 > Math.ceil(totalresults/props.pageSize)){

    }else{
    
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const country = "us";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${API_KEY}`;
    setLoading(true)
    const response = await fetch(API_URL);
    const data = await response.json();
    setPage(page + 1)
    setLoading(false)
    return setUser(data.articles);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="my-3 text-center">Top headlines</h1>
        {loading && <Spinner/>}
        {user && user.map((article, index) => {
          return (
            <News
              key={index}
              id={index}
              title={article.title ? article.title.slice(0,45) + "..." : ""}
              description={article.content ? article.content.slice(0,150)+ "..." : "Check Details"}
              imgurl={article.urlToImage? article.urlToImage : "https://images.hindustantimes.com/tech/img/2022/12/19/1600x900/nebula_by_NASA_1671473201080_1671473209080_1671473209080.jpg"}
              detail={article.url}
              author={article.author ? "News By: " + article.source.name : ""}
            />
          );
        })}
      </div>
      <div className="container my-5 d-flex justify-content-between">
        <button  disabled={page<=1} className="btn btn-dark left " onClick={handlePrevious}>Previous</button>
        <button disabled={page + 1> Math.ceil(totalresults/props.pageSize)} d-flex justify-content-between className="btn btn-dark right" onClick={handleNext}>Next</button>
      </div>
      
    </div>
  );
}
export default NewsData;
