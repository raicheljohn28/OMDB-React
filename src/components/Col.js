import React from "react";
import PropTypes from 'prop-types';

// This Col component offers us the convinience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

class Col extends React.Component {

  render () {
    const { size, children } = this.props
    const col_size = size.split(" ").map(size => "col-" + size).join(" ");

    return (
      <div className={col_size}>
        {children}
      </div>
    );
  };
}

Col.propTypes = {
  size: PropTypes.array,
  children: PropTypes.node
}

export default Col;
