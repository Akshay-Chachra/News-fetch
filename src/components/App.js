
import NewsData from "./NewsData";
import Navbar from "./Navbar";
import WorldClock from "./WorldClock"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {

  const [loading, setLoading] = useState(false);
  const [path ,setPath] = useState("");
  return (
    <div>
       
      

      <Router> 

        <Navbar loadingvalue={loading} currentPage={path} />

        <Routes>
          
          <Route exact path="/"
            element={<NewsData key="general" pageSize={6} category={"general"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath} />}
          />
          <Route exact path="/business"
             
            element={<NewsData key="business" pageSize={6} category={"business"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/entertainment"
             
            element={<NewsData key="entertainment" pageSize={6} category={"entertainment"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/health"
             
            element={<NewsData key="health" pageSize={6} category={"health"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/science"
             
            element={<NewsData key="science" pageSize={6} category={"science"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/sports"
             
            element={<NewsData key="sports" pageSize={6} category={"sports"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/technology"
             
            element={<NewsData key="technology" pageSize={6} category={"technology"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/worldclock"
             
             element={<WorldClock/>}
           />


        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
