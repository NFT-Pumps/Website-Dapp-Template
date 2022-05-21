import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/index.jsx";
import { Component } from 'react';

class App extends Component {
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    ) 
  }
}

export default App;
