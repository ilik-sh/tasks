import { useEffect } from "react";
import Ram from "./components/Ram";
import { getCharacters, getEverySecondCharacterPage } from "./api/rickAndMortyApi";


function App() {
  useEffect(() => {
    getEverySecondCharacterPage(1).then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
        <Ram>dsa</Ram>
    </div>
  );
}

export default App;
