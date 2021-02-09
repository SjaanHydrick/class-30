/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Villager from '../villagers/Villager';
import VillagerDetail from '../villagers/VillagerDetail';
import VillagerList from '../villagers/VillagerList';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Villagers', () => {
    const villagers = [{ name: '', image: '' }];
    const { asFragment } = render(
      <BrowserRouter>
        <VillagerList villagers={villagers}/>
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Villager', () => {
    const villager = [{
      '_id': '5f5fb4bbbfd05c2aed82e52c',
      'url': 'https://animalcrossing.fandom.com/wiki/Kyle',
      'name': 'Kyle',
      'japaneseName': 'リカルド Rikarudo',
      'image': 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/46/Kyle_NH.png/revision/latest?cb=20200821045757',
      'quote': 'Never trust a sheep in wolf\'s clothing.',
      'gender': 'male',
      'personality': 'smug',
      'species': 'wolf',
      'birthday': 'December 6th (Sagittarius)',
      'phrase': 'alpha',
      'skill': 'Typing',
      'goal': 'Singer',
      'coffee': {
        'roast': 'Blue Mountain',
        'milk': 'Regular amount of milk',
        'sugar': 'Two spoonfuls of sugar'
      },
      'song': {
        'name': 'K.K. Metal',
        'link': 'https://animalcrossing.fandom.com/wiki/K.K._Metal'
      },
      'style': 'Rock \'n\' roll',
      '__v': 0
    }];

    const { asFragment } = render(
      <BrowserRouter>
        <Villager {...villager}/>
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders VillagerDetail', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <VillagerDetail path={'/5f5fb4bbbfd05c2aed82e460'}/>
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
