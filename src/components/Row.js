import React from "react";
import PropTypes from 'prop-types';

class Row extends React.Component {

  render () {
    const { fluid, children } = this.props
    
    return (
      <div className={`row${fluid ? "-fluid" : ""}`}>
        {children}
      </div>
    );
  }
}

Row.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.node
}

export default Row;
