import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import { Store } from './Pages/Store';
import { Home } from './Pages/Home';
import { About } from './Pages/About';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Container>
  );
}

export default App;
