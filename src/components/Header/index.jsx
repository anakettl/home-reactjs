import React, { Component } from "react";
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data?.title}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data?.paragraph}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}