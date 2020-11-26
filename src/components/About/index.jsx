import React, { Component } from 'react'
import './index.css'

import about from '../../assets/images/about/about.jpg'

export default class About extends Component {
  render() {
    let url = "http://www.fabfoundation.org/index.php/the-fab-charter/index.html";
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src={about} className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Sobre</h2>
                <p>{this.props.data?.paragraph}</p>
                Conheça a {''}
                <a href={url}>FAB CHARTER</a><br ></br>A Carta de Intenções que regra os Fab Labs.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
