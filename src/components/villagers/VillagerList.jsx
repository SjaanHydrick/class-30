import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Villager from './Villager';
import styles from './Villager.css';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => (
    <div key={villager.id}>
      <Link to={`/${villager._id}`}>
        <Villager {...villager} />
      </Link>
    </div>
  ));

  return (
    <div data-testid="villagers" className={styles.villagerList}>
      {villagerElements}
    </div>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
  }))
};

export default VillagerList;
