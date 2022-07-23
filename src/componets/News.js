import React, { Component } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    pageSize: "9",
    country: "in",
    category: "general",

  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    apikey: PropTypes.string,
  };
  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category} -NewsHub `;
  }

  async componentDidMount() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(80);
    this.setState({ articles: parseData.articles, loading: false });
    this.props.setProgress(100);
  }

  handleNextClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apikey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.props.setProgress(20);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(100);

    this.setState({ articles: parseData.articles, loading: false });
  };
  handlePrevClick = async () => {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apikey=${this.props.apikey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.props.setProgress(40);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(100);

    this.setState({ articles: parseData.articles, loading: false });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            Top News Headlines from {this.props.category}
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    publishedAT={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between my-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
