import "./App.scss";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import FooterContainer from "./components/FooterContainer";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <MainContainer />
      </div>

      <FooterContainer />
    </>
  );
}

export default App;
