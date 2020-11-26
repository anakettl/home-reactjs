import React, { Component } from "react";
import './index.css'

export default class Link extends Component {
  render() {
    return (
      <div id="links" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Links úteis</h2>
          </div>
          <div className="row">
            {this.props.data?.map((d, i) => (
              <div key={`${d.link}-${i}`} className="col-xs-6 col-md-3">
                <div className="link">
                  <div className="link-image">
                    {" "}
                    <a href={d.link} target="_blank" rel="noopener noreferrer">
                      <img src={d.image} alt="" />{" "}
                    </a>
                  </div>
                  <div className="link-content">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
