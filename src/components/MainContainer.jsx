import ImageComponent from "./ImageComponent"
import MyComp from "./MyComp"
import ButtonComponent from "./ButtonComponent"
import logo from "../logo.svg"
const MainContainer = () => (
    
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
)

export default MainContainer