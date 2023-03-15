import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Budgets from '../pages/Budgets';
import Nav from '../components/Nav';

const Router =  () => (
  <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budgets/" element={<Budgets />} />
        <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;