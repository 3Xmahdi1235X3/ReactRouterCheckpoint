import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import MovieDetails from "./pages/MovieDetails";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>       
           <Route path="/" element={<Home></Home>}/>
           <Route path="/movie/:id" element={<MovieDetails></MovieDetails>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
