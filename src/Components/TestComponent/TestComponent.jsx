import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "../../Context/CatalogProvider";

const TestComponent = () => {
  const catalog = useContext(CatalogContext);
  const [loading, setLoading] = useState(true);
  const [tapes, setTapes] = useState([]);

  useEffect(() => {
    if (catalog.tapes && catalog.tapes.default) {
      setTapes(catalog.tapes.default);
      setLoading(false);
      console.log(catalog.tapes.default);
    }
  }, [catalog]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return tapes
    .filter((item) => item.Artist === "R.E.M.")
    .map((item, idx) => {
      console.log(item);
      return (
        <p key={idx}>
          {item.Artist} - {item.Title} - {item.Location}
        </p>
      );
    });
};

export default TestComponent;
