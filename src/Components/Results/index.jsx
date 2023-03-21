import LoadingIndicator from '../Loader';

const Results = (props) => {
  if (!props.data){
    return LoadingIndicator();
  }
  const {id,name,sprites} = props.data;
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
      ========leaving this here because instructions say to==========
      
      <pre>{JSON.stringify(props.data, undefined, 2)}</pre>
    </section>
  );
}


export default Results;