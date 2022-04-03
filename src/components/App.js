import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom";
import MainCard from "./MainCard";
import AllJokes from "./AllJokes";
import WriteJokes from "./WriteJokes";
import '../css/App.css'
function App() {
  return (
   <>
   <Router>
    <h2 className="title">CHUCK NORRIS JOKES</h2>
      <nav>
          <Link to='/'>NEW JOKE</Link>
          <Link to='/AllJokes'>ALL JOKE</Link>
          <Link to='/WriteJokes'>WRITE JOKE</Link>
          <div id="indicator"></div>
      </nav>
      <br></br>
      <Routes>
        <Route exact path="/" element={<MainCard />}/>
        <Route exact path="/AllJokes" element={<AllJokes />}/>
        <Route exact path="/WriteJokes" element={<WriteJokes />}/>
      </Routes>
      </Router>
   </>
  );
}

export default App;
