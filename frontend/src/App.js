import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserScreen from './screens/UserScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar bg="secondary" expand="lg">
            <Container>
              <Navbar.Brand href="/" className="text-white">
                Categories
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<UserScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
