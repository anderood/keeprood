import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "/src/Components/Nav/index.jsx";
import NewNote from "/src/Components/NewNote/index.jsx";
import Container from "/src/Components/ContainerCards/index.jsx";
import NewNoteContainer from "./Components/NewNoteContainer/index.jsx";
function App() {
  return (
    <>
        <Nav />
        <NewNoteContainer />
        <Container />
    </>
  )
}

export default App
