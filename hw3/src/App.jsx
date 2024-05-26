import Home from './routes/Home';
import List from './routes/List';
import Population from './routes/Population.jsx';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/population" element={<Population />} />
      </Routes>
  </>
  );
}
