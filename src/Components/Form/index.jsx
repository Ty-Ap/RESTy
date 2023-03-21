
import './Form.scss';
import React from 'react';
import { useState } from 'react';

const Form = (props) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text'  value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;