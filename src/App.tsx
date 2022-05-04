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
      <GlobalStyle/>
      <Header 
        onOpenNewTransactionModal={handleModalIsOpen}
      />
      <NewNote 
        isOpen={modalIsOpen}
        onRequestClose={handleModalIsClose} 
      />
      <Dashboard />
    </div>
  );
}

export default App;
