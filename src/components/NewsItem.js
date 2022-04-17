import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 badge bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            !imageUrl
              ? "https://images.moneycontrol.com/static-mcnews/2012/07/godrej_properties_79095997.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-danger"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
