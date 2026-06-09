import styles from "./Results.module.css";

const Results = ({ filteredSearchResults, loading }) => {
  return (
    <>
      {loading ? (
        <div>LOADING . . .</div>
      ) : !filteredSearchResults?.length ? (
        <h3>No Results Found.</h3>
      ) : (
        <h3>Results</h3>
      )}

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
