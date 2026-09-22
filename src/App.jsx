import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Contatos from "./Contatos";
import "./styles.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Header />
      <Sobre />
      <Projetos />
      <Contatos />

    </div>
  );
}

export default App
