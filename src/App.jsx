
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certificaciones from './pages/certificaciones';
import Inicio from './pages/inicio'; 
  import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <div className="App">
       
        <main>
          <Routes>
             <Route path="/" element={ <Inicio />} />
             <Route path="/src/pages/certificaciones.jsx" element={<Certificaciones />}/>
            {/* ... otras rutas */}
          </Routes>
        </main>
      </div>
    </Router>
        
      
       
    </>
  )

}
export default App
