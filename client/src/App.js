import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={ <Home/> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
