/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { getVillager } from '../services/villagerApi';
import { Link, useParams } from 'react-router-dom';

const VillagerDetail = () => {
  const [chosenVillager, setVillager] = useState();
  const { id } = useParams();

  useEffect(async() => {
    const villager = await getVillager(id);
    setVillager(villager);
  }, []);

  return (
    <>
      {chosenVillager ?
        <div>
          <Link to="/"><p>&larr; Back to Home</p></Link>
          <img src={chosenVillager.image} />
          <p>{chosenVillager.name}</p>
          <p>&quot;{chosenVillager.quote}&quot;</p>
          <p>Personality: {chosenVillager.personality}</p>
          <p>Species: {chosenVillager.species}</p>
          <p>Birthday: {chosenVillager.birthday}</p>
          <p>Coffee: {chosenVillager.coffee.roast}, {chosenVillager.coffee.milk}, {chosenVillager.coffee.sugar}</p>
        </div>  
        :
        <p>Loading...</p>  
      }
    </>
  );
};

export default VillagerDetail;
