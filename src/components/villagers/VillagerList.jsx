import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => (
    <div key={villager.id}>
      <Link to={`/${villager.id}`}>
        <Villager {...villager} />
      </Link>
    </div>
  ));

  return (
    <div>
      {villagerElements}
    </div>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  })).isRequired
};

export default VillagerList;
