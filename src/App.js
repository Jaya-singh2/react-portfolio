import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/header"
import Content from "./pages/content";
import About from "./pages/about";
import Services from "./pages/services";
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Content></Content>
        <About></About>
        <Services></Services>
        {/* <Routes>
          <Route exact path='/' element={< Content />}></Route>
          <Route exact path='/about' element={< About />}></Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
