import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "../../Context/CatalogProvider";

const TestComponent = () => {
  const catalog = useContext(CatalogContext);
  const [tapes, setTapes] = useState([]);
  const [visisble, setVisible] = useState(false);

  useEffect(() => {
    if (catalog.tapes.default) {
      setTapes(catalog.tapes.default);
    }
  }, [catalog]);

  return (
    <>
      <button onClick={() => setVisible(true)}>push me</button>
      {visisble &&
        tapes.map((item, idx) => {
          if (idx > 100) return;
          return (
            <p key={idx}>
              {item.Artist} - {item.Title} - {item.Year}
            </p>
          );
        })}
    </>
  );
};

export default TestComponent;
