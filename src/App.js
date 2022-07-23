import React, { Component } from "react";
import Navbar from "./componets/Navbar";
import News from "./componets/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  apikey = "c502a47c4222417a889532a6eae0ef4c";
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              {" "}
              <Route
                exact
                path="/"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    key="home"
                    category={"general"}
                    country={"in"}
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={9}
                    category={"entertainment"}
                    country={"in"}
                  />
                }
              />{" "}
              <Route
                exact
                path="/sports"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    key="sports"
                    category={"sports"}
                    country={"in"}
                  />
                }
              />{" "}
              <Route
                exact
                path="/business"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    category={"business"}
                    country={"in"}
                    key="business"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    category={"health"}
                    country={"in"}
                    key="health"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    category={"general"}
                    country={"in"}
                    key="general"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    category={"science"}
                    country={"in"}
                    key="science"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    category={"technology"}
                    country={"in"}
                    key="technology"
                  />
                }
              />
              <Route
                exact
                path="/about"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={9}
                    category={"about"}
                    country={"in"}
                  />
                }
              />{" "}
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
