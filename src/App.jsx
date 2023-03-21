import React,{useState} from 'react';
import axios from 'axios';

import './App.scss'; //componentize this after get route is done


import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App(){

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    try {
      const response = await axios.get(requestParams.url);
      console.log('Response data:', response.data);
      const {id,name,sprites,stats} = response.data;
      const pokemonData = {id,name,stats,sprites};
      setData(pokemonData);
      setRequestParams(requestParams);
      console.log('Pokemon data:', pokemonData);
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );
}

export default App;