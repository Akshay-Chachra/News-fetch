import { useState } from "react";

function News(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-5">
      
      <div className="card shadow  mb-3 rounded bg-light">
        <img src={props.imgurl} className="card-img-top" alt="Not found" />
        <div className="card-body p-4">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {props.author}
            </small>
            </p>
          <p>
          <small>
              Published on : {props.time}
            </small>  
          </p>
                  
          
          <a href={props.detail} className="btn shadow">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
export default News;
