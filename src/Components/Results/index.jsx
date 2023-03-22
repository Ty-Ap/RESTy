import LoadingIndicator from '../Loader';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = ({headers,data}) => {
  if (!data){
    return LoadingIndicator();
  }
  const {id,name,sprites} = data;
  const spriteKeys = Object.keys(sprites);
  const spriteUrls = spriteKeys.slice(0,5).map((key)=> sprites[key]);

  return (
    <section data-testid="results">
      <h3>{name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
      <div className="sprites">
        {spriteUrls.map((url, index) => (
          <img key={index} src={url} alt={`Sprite ${index + 1}`} />
        ))}
      </div>
      <h4>Headers:</h4>
      <JSONPretty id="json-pretty-headers" data={headers}></JSONPretty>
      ========leaving this here because instructions say to==========

     {/* display results */}
     <h5>Results:</h5>
      <JSONPretty id="json-pretty-results" data={data}></JSONPretty>
     </section>
  );
}


export default Results;