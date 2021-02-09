import React from 'react';
import PropTypes from 'prop-types';
import styles from './Villager.css';

const Villager = ({ image, name }) => (
  <figure>
    <img src={image} />
    <p className={styles.name}>{name}</p>
  </figure>
);

Villager.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Villager;
