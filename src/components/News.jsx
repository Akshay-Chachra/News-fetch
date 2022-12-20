import { useState } from "react";

function News(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 my-5 ">
      <div className="card shadow p-3 mb-3 rounded bg-light" style={{ width: "19rem" }}>
        <img src={props.imgurl} className="card-img-top" alt="Not found" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <h6 className="card-text bold">{props.author}</h6>
          <a href={props.detail} className="btn">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
export default News;
