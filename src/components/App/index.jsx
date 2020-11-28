import React, { Component } from 'react'
import About from '../About'
import Navigation from '../Navigation';
import Header from '../Header';
import Link from '../Link';
import Channels from '../Channel';
import Equipment from '../Equipament';
import OpenDay from '../OpenDay';
import Calendar from '../Calendar';
import json from '../../data/data.json'
import './index.css'

export default class App extends Component {
  state = {
    data: {}
  }

  fetchData() {
    this.setState({ data: json });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        < Navigation />
        < Header data={this.state.data.Header} />
        < About data={this.state.data.About} />
        < Link data={this.state.data.Links} />
        < Equipment />
        < Channels data={this.state.data.Channels} />
        < OpenDay />
        < Calendar data={this.state.data.Calendar} />
      </div>
    )
  }
}
