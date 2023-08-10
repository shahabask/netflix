import Navbar from './Components/Navbar/Navbar';
import './App.css';
import './Components/Navbar/Navbar.css';
import RowPost from './Components/RowPost/RowPost';
import Banner from './Components/Banner/Banner';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;
