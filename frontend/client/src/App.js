import './App.css'

import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Ambitions from './pages/Ambitions';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
       
        <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Ambitions" element={<Ambitions />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

        
      </BrowserRouter>
       
      </div>
    </div>
  );
}

export default App;
