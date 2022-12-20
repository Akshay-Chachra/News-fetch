import NewsData from "./NewsData";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <NewsData pageSize={20} />
    </div>
  );
}

export default App;
