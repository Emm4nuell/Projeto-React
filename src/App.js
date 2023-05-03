import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Sobre from './Components/pages/Sobre';
import Container from './Components/layout/Container';
import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Pedido from './Components/pages/Pedido'
import CriarConta from './Components/pages/CriarConta';
import ListUsuarios from './Components/pages/ListUsuarios';

function App() {
  return (
    <Router>

        <NavBar />

          <Container customClass="min-height">

            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path='/listadeusuarios' element={<ListUsuarios />}/>
                <Route exact path="/pedido" element={<Pedido />} />
                <Route exact path='/sobre' element={<Sobre />} />
                <Route exact path='/criarconta' element={<CriarConta />}/>
            </Routes>

          </Container>

        <Footer />
      </Router>
  );
}

export default App;
