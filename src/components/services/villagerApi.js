const URL = 'https://ac-vill.herokuapp.com/villagers';

export const getVillagers = () => {
  return fetch(`${URL}`)
    .then(res => res.json());
};

export const getVillager = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json());
};
