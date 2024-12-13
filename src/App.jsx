import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Perbaikan di sini */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;