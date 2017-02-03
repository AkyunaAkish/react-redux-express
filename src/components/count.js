import React, { Component } from 'react';
import { connect } from 'react-redux';

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.number}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    number: state.number_reducer.number
  };
}

export default connect(mapStateToProps)(Count);
