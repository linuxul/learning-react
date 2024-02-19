import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage.js';

const App = () => (
  <div>
    <Menu>
    </Menu>
    <hr></hr>
    <Routes>
      <Route path="/red" element={<RedPage />}></Route>
      <Route path="/blue" element={<BluePage />}></Route>
    </Routes>
  </div>
)

export default App;
