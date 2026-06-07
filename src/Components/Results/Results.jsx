import styles from "./Results.module.css";

const Results = ({ filteredSearchResults, loading }) => {
  return (
    <>
      {loading ? <div>LOADING . . .</div> : <h3>Results</h3>}

      {filteredSearchResults &&
        filteredSearchResults.map((item, idx) => {
          return (
            <p key={idx}>
              {item.artist} - {item.title} - {item.location}
            </p>
          );
        })}
    </>
  );
};

export default Results;
