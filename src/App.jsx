import CatalogProvider from "./Context/CatalogProvider";
import Root from "./Root";

function App() {
  return (
    <CatalogProvider>
      <Root />
    </CatalogProvider>
  );
}

export default App;
