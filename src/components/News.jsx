import { useState } from "react";

function News(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-4 p-2">
      <div className="date">
        <p className="datepara">{props.time}</p>
      </div>
      <div className="card shadow p-4 mb-3 rounded bg-light">
        <img src={props.imgurl} className="card-img-top" alt="Not found" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {props.author}
            </small>
            <small className="text-muted">
               {props.time}
            </small>
          </p>
          <a href={props.detail} className="btn">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
export default News;
