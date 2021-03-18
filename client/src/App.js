import "./App.css";
import Display from "./components/Display";
import SearchArea from "./components/SearchArea";
import Info from "./components/Info";

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <SearchArea />
      <Display />
      <Info />
    </>
  );
}

export default App;
