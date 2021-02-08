import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ image, name }) => (
  <figure>
    {
      !image || image === undefined ?
        <p>No Image Found</p>
        :
        <img src={image} />
    }
    <p>{name}</p>
  </figure>
);

Villager.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Villager;
