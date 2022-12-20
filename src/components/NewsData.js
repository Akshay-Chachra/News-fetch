import React, { useState, useEffect } from "react";
import News from "./News";

function NewsData() {
  const [user, setUser] = useState([]);
  const [page ,setPage] = useState(0);
  const [totalresults , setTotalResults] = useState(0)

  const fetchData = async () => {
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const country = "in";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page + 1}&pageSize=20&apiKey=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setTotalResults(data.totalResults)
    return setUser(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevious = async () =>{
    
    if (page <= 1){

    }else{
    
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const country = "in";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page - 1}&pageSize=20&apiKey=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setPage(page - 1)
    return setUser(data.articles);
    }
  }

  const handleNext = async () =>{
    if (page + 1 > Math.ceil(totalresults/20)){

    }else{
    
    const API_KEY = "fb75881c55f84045934af853a53c42e3";
    const country = "in";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page + 1}&pageSize=20&apiKey=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setPage(page + 1)
    return setUser(data.articles);
    }
  }

  return (
    <div className="container">
      <div className="row">
        {user && user.map((article, index) => {
          return (
            <News
              key={index}
              id={index}
              title={article.title ? article.title.slice(0,45) + "..." : ""}
              description={article.content ? article.content.slice(0,150)+ "..." : "Check Details"}
              imgurl={article.urlToImage? article.urlToImage : "https://images.hindustantimes.com/tech/img/2022/12/19/1600x900/nebula_by_NASA_1671473201080_1671473209080_1671473209080.jpg"}
              detail={article.url}
              author={article.author ? "News By: " + article.author : ""}
            />
          );
        })}
      </div>
      <div className="container my-5 d-flex justify-content-between">
        <button  disabled={page<=1} className="btn btn-dark left " onClick={handlePrevious}>Previous</button>
        <button disabled={page + 1> Math.ceil(totalresults/20)} d-flex justify-content-between className="btn btn-dark right" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
export default NewsData;
