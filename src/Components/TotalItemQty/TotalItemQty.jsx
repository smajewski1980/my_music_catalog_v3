import styles from "./TotalItemQty.module.css";
import { CatalogContext } from "../../Context/CatalogContext";
import { useEffect, useContext, useState } from "react";

const TotalItemQty = () => {
  const [totalItemQty, setTotalItemQty] = useState(0);
  const { recordsData, tapesData, cdsData, cdCompsData, cdSinglesData } =
    useContext(CatalogContext);

  const recordsQty = recordsData.length;
  const tapesQty = tapesData.length;
  const cdsQty = cdsData.length;
  const cdCompsQty = cdCompsData.length;
  const cdSinglesQty = cdSinglesData.length;

  useEffect(() => {
    setTotalItemQty(
      () => recordsQty + tapesQty + cdsQty + cdCompsQty + cdSinglesQty,
    );
  }, []);

  return (
    <div className={styles.totalQtyWrapper}>
      <p>
        Home to over <span>{totalItemQty}</span>&nbsp;items.
      </p>
    </div>
  );
};

export default TotalItemQty;
