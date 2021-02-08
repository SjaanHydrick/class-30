import React, { useState, useEffect } from 'react';
import { getVillagers } from '../components/services/villagerApi';
import VillagerList from '../components/villagers/VillagerList';

export default function AllVillagers({ page }) {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers(page).then((newVillagers) => setVillagers(newVillagers));
  }, []);

  return (
    <div>
      {
        villagers ?
          <VillagerList villagers={villagers} />
          :
          <p>Loading...</p>
      }
    </div>
  );
}
