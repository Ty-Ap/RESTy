
import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './';

describe('Results component', () => {

  it('renders the Pokemon name and sprites when data is provided', () => {
    const mockData = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        other: {
          dream_world: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
            front_female: null,
          },
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          },
        },
      },
    };
    render(<Results data={mockData} />);
    const nameElement = screen.getAllByText(/bulbasaur/i);
    expect(nameElement).toBeTruthy();
    const spriteElements = screen.getAllByAltText(/sprite/i);
    expect(spriteElements).toHaveLength(5);
  });
});