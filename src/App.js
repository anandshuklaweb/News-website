import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import MoveStuffAround from "./components/MoveStuffAround";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <MoveStuffAround />
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
          <Footer />
          <ScrollButton />
        </BrowserRouter>
      </div>
    );
  }
}
