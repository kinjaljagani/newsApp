import React from "react";

const NewsItem =(props) => {
  
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <div className="d-flex justify-content-end position-absolute end-0">
            <span
              className="badge rounded-pill bg-danger"
             
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imgUrl
                ? "https://static.tnn.in/thumb/msid-106308149,thumbsize-173122,width-1280,height-720,resizemode-75/106308149.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
