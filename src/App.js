import logo from "./logo.svg";
import "./App.css";
import MyComp from "./components/MyComp";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import Navbar from "./components/Navbar";
import LogoImg from "./components/LogoImg.jsx";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <LogoImg />
          <LogoImg />
        </header>
        <main>
          <div class="gatti">
            <ImageComponent
              source="https://placekitten.com/200"
              description="cat pic"
            />
            <ImageComponent
              source="https://placekitten.com/300"
              description="cat pic"
            />
            <ImageComponent
              source="https://placekitten.com/400"
              description="cat pic"
            />
            <ImageComponent
              source="https://placekitten.com/350"
              description="cat pic"
            />
            <ImageComponent
              source="https://placekitten.com/450"
              description="cat pic"
            />
            <ImageComponent
              source="https://placekitten.com/600"
              description="cat pic"
            />
          </div>
          <ImageComponent source={logo} description="logo statico" />
          <MyComp title="Prova di Prompts" color="pink" />
          <ButtonComponent content="bottone che non fa nulla" />
        </main>
      </div>
    </>
  );
}

export default App;
