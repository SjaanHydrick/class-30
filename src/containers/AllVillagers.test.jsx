import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillagers container', () => {
  it('displays a list of villagers', async() => {
    render(<AllVillagers />);

    const display = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(display).not.toBeEmptyDOMElement();
    });
  });
});
