import { Route, Routes } from "react-router-dom"
import { NavBar } from "./Componentes/Navigation/NavBar"
import HomePage from "./Pages/HomePage";

function App() {

  // Modifica o fundo
  const fundo = {
    backgroundColor: "#292929",
    backgroundImage: "linear-gradient(to top, #000000, #000000)",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  }

  return (
    <>
      <div className='min-h-screen w-full select-none flex flex-col' style={fundo}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
