import React from 'react'
import { filterAdder } from '../reducers/filterReducer'

class Filter extends React.Component {

  filterChange = (event) => {
    const filter = event.target.value
    this.props.store.dispatch(filterAdder(filter))
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

export default Filter