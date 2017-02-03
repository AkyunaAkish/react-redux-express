import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Count from './count';

class Add extends Component {
  constructor(props) {
    super(props);
  }

  add() {
    this.props.addNumber();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.add.bind(this)}>
            Add Number
          </button>
        </div>

        <div>
          <Count />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Add);
