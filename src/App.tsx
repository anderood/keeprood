import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewNote } from "./components/NewNote";
import { GlobalStyle } from "./styles/global";

function App() {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function handleModalIsOpen(){
      setModalIsOpen(true);
  }

  function handleModalIsClose(){
      setModalIsOpen(false);
  }
  return (
    <div className="App">
        <div className="container">

            <Header onOpenNewTransactionModal={handleModalIsOpen}/>
            <Dashboard />
        </div>

    </div>
  );
}

export default App;
