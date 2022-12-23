
import NewsData from "./NewsData";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {

  const [loading, setLoading] = useState(false);
  const [path ,setPath] = useState("");
  return (
    <div>
       
      

      <Router> 

        <Navbar loadingvalue={loading} currentPage={path}/>
        <Routes>
          
          <Route exact path="/"
            element={<NewsData key="general" pageSize={5} category={"general"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/business"
             
            element={<NewsData key="business" pageSize={5} category={"business"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/entertainment"
             
            element={<NewsData key="entertainment" pageSize={5} category={"entertainment"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/health"
             
            element={<NewsData key="health" pageSize={5} category={"health"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/science"
             
            element={<NewsData key="science" pageSize={5} category={"science"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/sports"
             
            element={<NewsData key="sports" pageSize={5} category={"sports"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
          <Route exact path="/technology"
             
            element={<NewsData key="technology" pageSize={5} category={"technology"} country="in" isLoading={setLoading} loadingvalue={loading}  renderpage={setPath}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
