import React, { Component } from "react";
import './index.css'

export default class Channel extends Component {
  render() {
    return (
      <div id="channels" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Canais</h2>
          </div>
          <div className="row">
            {this.props.data?.map((d, i) => (
              <div key={`${d.link}-${i}`} className="col-md-6">
                {" "}
                <a href={d.link}>
                  <i className={d.icon}></i>
                </a>
                <div className="channel-desc">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
