import LoadingIndicator from '../Loader';

const Results = (props) => {
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : LoadingIndicator()}</pre>
    </section>
  );
}


export default Results;