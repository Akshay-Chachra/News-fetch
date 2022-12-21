import NewsData from "./NewsData";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
       
      

      <Router> 

        <Navbar/>
        <Routes>
          
          <Route exact path="/"
            element={<NewsData key="general" pageSize={5} category={"general"} country="in" />}
          />
          <Route exact path="/business"
             
            element={<NewsData key="business" pageSize={5} category={"business"} country="in"/>}
          />
          <Route exact path="/entertainment"
             
            element={<NewsData key="entertainment" pageSize={5} category={"entertainment"} country="in"/>}
          />
          <Route exact path="/health"
             
            element={<NewsData key="health" pageSize={5} category={"health"} country="in"/>}
          />
          <Route exact path="/science"
             
            element={<NewsData key="science" pageSize={5} category={"science"} country="in"/>}
          />
          <Route exact path="/sports"
             
            element={<NewsData key="sports" pageSize={5} category={"sports"} country="in"/>}
          />
          <Route exact path="/technology"
             
            element={<NewsData key="technology" pageSize={5} category={"technology"} country="in"/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
