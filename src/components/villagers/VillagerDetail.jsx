/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { getVillager } from '../services/villagerApi';
import { Link, useParams } from 'react-router-dom';
import styles from './Villager.css';

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
        <div className={styles.details}>
          <Link to="/"><p className={styles.back}>&larr; Back to Home</p></Link>
          <p className={styles.detailsName}>{chosenVillager.name}</p>
          <img className={styles.detailsImg} src={chosenVillager.image} />
          <p className={styles.quote}>&quot;{chosenVillager.quote}&quot;</p>
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
