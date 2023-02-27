import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Context from "./Context";

import Home from './views/Home'
import Inventory from './views/Inventory';
import IpList from './views/IpList';
import Login from './views/Login'
import NewServer from './views/NewServer';
import Perfil from './views/Perfil'
import Register from './views/Register'

const { Provider } = Context;

export default function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/inventario/new" element={<NewServer />} />
            <Route path="/iplist" element={<IpList />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}