import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Add extends Component {

  addNumber() {
    this.addNumber();
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addNumber()}>
          Add Number
        </button>
      </div>
    )
  }
}


export default connect(null, actions)(Add)
