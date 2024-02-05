import { Counter } from "./components/common/Counter";
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <ItemCountContainer stock={3} /> 
      {/* <ItemCountContainer stock={5} />
      <ItemCountContainer stock={7} /> 
      <ItemCountContainer stock={2}/>  */}
    </>
  );
};

export default App;
