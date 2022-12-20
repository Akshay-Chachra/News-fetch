import NewsData from "./NewsData";
import Navbar from "./Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <NewsData pageSize={5} country={"in"} />
    </div>
  );
}

export default App;
