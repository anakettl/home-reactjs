import React, { Component } from "react";
import './index.css'

export default class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="/">
              POALAB
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#links" className="page-scroll">
                  Links úteis
                </a>
              </li>
              <li>
                <a href="#equipment" className="page-scroll">
                  Equipamentos
                </a>
              </li>
              <li>
                <a href="#channels" className="page-scroll">
                  Canais
                </a>
              </li>
              <li>
                <a href="#openDay" className="page-scroll">
                  Open Day
                </a>
              </li>
              <li>
                <a href="#calendar" className="page-scroll">
                  Calendário
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
