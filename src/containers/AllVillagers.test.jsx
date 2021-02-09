import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AllVillagers from './AllVillagers';

describe('AllVillagers container', () => {
  it('displays a list of villagers', async() => {
    render(
      <BrowserRouter>
        <AllVillagers />
      </BrowserRouter>);

    screen.getByText('Loading...');

    const display = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(display).not.toBeEmptyDOMElement();
    });
  });
});
