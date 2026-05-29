import CatalogProvider from "./Context/CatalogProvider";
import TestComponent from "./Components/TestComponent/TestComponent";

function App() {
  return (
    <CatalogProvider>
      <p>the new catalog is about to be here</p>
      <TestComponent />
    </CatalogProvider>
  );
}

export default App;
