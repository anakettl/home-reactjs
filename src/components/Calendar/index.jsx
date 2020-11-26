import React, { Component } from "react";
import './index.css'

import ifrs from '../../assets/images/calendar/ifrs.svg'

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <div id="calendar" className="text-center">
          <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
              <h2>{this.props.data?.title}</h2>
            </div>
            <iframe
              title="Agenda do POA LAB"
              src="https://calendar.google.com/calendar/embed?src=poalabifrs%40gmail.com&ctz=America%2FSao_Paulo&amp;title=AGENDA%20POA%20LAB"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no" />
          </div>
        </div>
        
        <div id="footer">
          <div className="container text-center">
            <p>
              Coordenação: <a href="http://www.inf.poa.ifrs.edu.br/~peres/" rel="link">{this.props.data?.coordinator.name}</a>
              <br></br>
              {this.props.data?.coordinator.email}
              <br></br>
              {this.props.data?.paragraph}
            </p>
            <img src={ifrs} alt="" />{" "}
          </div>
        </div>
      </div>
    );
  }
}
