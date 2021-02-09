import React, { useState, useEffect } from 'react';
import { getVillagers } from '../components/services/villagerApi';
import Header from '../components/header/Header';
import VillagerList from '../components/villagers/VillagerList';

const AllVillagers = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers().then((villagers) => {
      setVillagers(villagers);
      setLoading(false);
    });
  }, []);

  if(loading) return <h2>Loading...</h2>;
  return <div><Header /><VillagerList villagers={villagers} /></div>;
};

export default AllVillagers;

