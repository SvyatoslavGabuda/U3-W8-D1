import "./App.css";
import Navbar from "./components/Navbar";
import LogoImg from "./components/LogoImg.jsx";
import MainContainer from "./components/MainContainer";
import FooterContainer from "./components/FooterContainer";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <LogoImg />
          <LogoImg />
          <LogoImg />
        </header>
        <MainContainer />
      </div>
      <FooterContainer />
    </>
  );
}

export default App;
