import React, { Component } from "react";

export class NewsItem extends Component {
    
    render() {
      let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgUrl?"https://static.tnn.in/thumb/msid-106308149,thumbsize-173122,width-1280,height-720,resizemode-75/106308149.jpg": imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More...
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default NewsItem;
