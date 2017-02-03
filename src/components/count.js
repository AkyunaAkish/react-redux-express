import React, { Component } from 'react'
import { connect } from 'react-redux'

class Count extends Component {

  render() {
    return (
      <div>
        {this.props.number}
      </div>
    )
  }
}

function mapStateToProps(rootReducer) {
  return {
    number: rootReducer.number_reducer.number
  }
}

export default connect(mapStateToProps)(Count)
