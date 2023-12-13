import Footer from './layouts/Footer'
import Header from './layouts/Header';
import Home from './pages/Home'
import UiKit from './pages/Uikit';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/uikit' element={< UiKit/>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
