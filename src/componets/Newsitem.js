import React, { Component } from "react";
import PropTypes from "prop-types";

export class Newsitem extends Component {
  static propTypes = {};

  render() {
    let { description, title, imageurl, newsurl, publishedAT, author } =
      this.props;
    return (
      <>
        <div>
          <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imageurl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {title}...{" "}
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Hot<span class="visually-hidden">Hot</span>
                  </span>
                </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text text-muted">
                  <small>
                    by {author} time {new Date(publishedAT).toGMTString}
                  </small>
                </p>
                <a
                  href={newsurl}
                  className="btn btn-dark btn-sm"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
