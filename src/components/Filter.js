import React from 'react'
import { connect } from 'react-redux'
import { filterAdder } from '../reducers/filterReducer'

class Filter extends React.Component {

  filterChange = (event) => {
    const filter = event.target.value
    this.props.filterAdder(filter)
  }

  render() {
    return (
      <div>
        filter
        <input name='filter' onChange={this.filterChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const ConnectedFilter = connect(
  mapStateToProps,
  { filterAdder }
)(Filter)

export default ConnectedFilter