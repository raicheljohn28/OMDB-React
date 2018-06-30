import React from "react";
import PropTypes from 'prop-types';

class Search extends React.Component {

  render () {
    const { handleInputChange, handleFormSubmit, value } = this.props
    
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={handleInputChange}
            value={value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For a Movie"
            id="search"
          />
          <br />
          <button onClick={handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    )
  }
}

Search.propTypes = {
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  value: PropTypes.string
}

export default Search;
