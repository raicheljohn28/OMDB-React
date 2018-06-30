import React from "react";
import PropTypes from 'prop-types';

class MovieDetail extends React.Component {

  render () {

    const { src, director, genre, released } = this.props

    return (
      <div className="text-center">
        <img
          className="img-responsive"
          src={src}
          style={{ margin: "0 auto" }}
          alt="sample"
        />
        <h3>
          Director(s): {director}
        </h3>
        <h3>
          Genre: {genre}
        </h3>
        <h3>
          Released: {released}
        </h3>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  src: PropTypes.string,
  director: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.string
}

export default MovieDetail;
