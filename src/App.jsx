import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "/src/Components/Nav/index.jsx";
import NewNote from "/src/Components/NewNote/index.jsx";
import Container from "/src/Components/Container/index.jsx";
function App() {
  return (
    <>
        <Nav />
        <NewNote />
        <Container />
    </>
  )
}

export default App
