import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {

  const [character, setCharacter] = useState(null);

  const reqApi = async () => {

    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
    const frase = await api.json();
    setCharacter(frase);
  }

  return (
    <Container>
      <Header />

        {
          !character ? 
          (
            <Welcome reqApi={reqApi} />
          )
          : 
          (
            <CharacterContainer character={character} reqApi={reqApi} />
          )
        }

      
      
    </Container>
  );
}
export default App;
