import React, { useReducer } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const initialState = {
  data: null,
  headers: null,
  requestParams: {},
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_HEADERS':
      return { ...state, headers: action.payload };
    case 'SET_REQUEST_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams) => {
    try {
      const response = await axios.get(requestParams.url);
      const { id, name, sprites, stats } = response.data;
      const pokemonData = { id, name, stats, sprites };

      dispatch({ type: 'SET_DATA', payload: pokemonData });
      dispatch({ type: 'SET_HEADERS', payload: response.headers });
      dispatch({ type: 'SET_REQUEST_PARAMS', payload: requestParams });
      dispatch({ type: 'ADD_TO_HISTORY', payload: requestParams });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {state.data && <Results headers={state.headers} data={state.data} />}
      <div>
        <h2>API Call History:</h2>
        <ul>
          {state.history.map((requestParams, index) => (
            <li key={index}>
              {requestParams.method} {requestParams.url}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
