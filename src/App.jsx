import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNovita from "./components/MyNovita";
import MyNuoviEp from "./components/MyNuoviEp";
import AltroDaEsplorare from "./components/AltroDaEsplorare";
import NewUscite from "./components/NewUscite";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />
      <MyNovita />
      <MyNuoviEp />
      <NewUscite />
      <AltroDaEsplorare />
      <MyFooter />
    </>
  );
}

export default App;
