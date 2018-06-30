import React from "react";
import PropTypes from 'prop-types';

class Panel extends React.Component {

  render () {

    const { heading, children } = this.props

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2>
            {heading}
          </h2>
        </div>
        <div className="panel-body">
          {children}
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node
}

export default Panel;
