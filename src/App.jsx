import { Navbar } from "./components/layout/Navbar";
import { FetchingDataContainer } from "./components/pages/fetchingData/FetchingDataContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ItemListContainer />
      <FetchingDataContainer />
    </>
  );
};

export default App;
