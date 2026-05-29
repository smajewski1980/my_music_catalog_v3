import { createContext, useEffect, useState } from "react";

export const CatalogContext = createContext();

function CatalogProvider({ children }) {
  const [catalog, setCatalog] = useState({
    records: [],
    tapes: [],
    cds: [],
    cdComps: [],
    cdCompsTracks: [],
    cdSingles: [],
    cdSinglesTracks: [],
  });

  useEffect(() => {
    const loadData = async () => {
      const [
        records,
        tapes,
        cds,
        cdComps,
        cdCompsTracks,
        cdSingles,
        cdSinglesTracks,
      ] = await Promise.all([
        import("../data/recordsJSON.json"),
        import("../data/tapesJSON.json"),
        import("../data/mainCatalogJSON.json"),
        import("../data/CD_CompsJSON.json"),
        import("../data/CD_CompsTracksJSON.json"),
        import("../data/CD_SinglesJSON.json"),
        import("../data/CD_SinglesTracksJSON.json"),
      ]);
      setCatalog({
        records,
        tapes,
        cds,
        cdComps,
        cdCompsTracks,
        cdSingles,
        cdSinglesTracks,
      });
    };
    loadData();
  }, []);

  return (
    <CatalogContext.Provider value={catalog}>
      {children}
    </CatalogContext.Provider>
  );
}

export default CatalogProvider;
