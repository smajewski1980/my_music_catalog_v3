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
        recordsData,
        tapesData,
        cdsData,
        cdCompsData,
        cdCompsTracksData,
        cdSinglesData,
        cdSinglesTracksData,
      ] = await Promise.all([
        import("../data/RECORDS.json"),
        import("../data/TAPES.json"),
        import("../data/CDS.json"),
        import("../data/CD_COMPS.json"),
        import("../data/CD_COMPS_TRACKS.json"),
        import("../data/CD_SINGLES.json"),
        import("../data/CD_SINGLES_TRACKS.json"),
      ]);
      setCatalog({
        recordsData,
        tapesData,
        cdsData,
        cdCompsData,
        cdCompsTracksData,
        cdSinglesData,
        cdSinglesTracksData,
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
