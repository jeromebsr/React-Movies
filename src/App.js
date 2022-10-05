import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './components/Movies';
import Movie from './components/Movie';
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;