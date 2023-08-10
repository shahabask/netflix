import Navbar from './Components/Navbar/Navbar';
import './App.css';
import './Components/Navbar/Navbar.css';
import RowPost from './Components/RowPost/RowPost';
import Banner from './Components/Banner/Banner';
import { originals,actions,horror,comedy,romance,documentaries } from './url';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost title='Netflix Originals' url={originals}/>
     <RowPost title='Action' isSmall url={actions}/>
     <RowPost title='Horror' isSmall url={horror}/>
     <RowPost title='Comedy' isSmall url={comedy}/>
     <RowPost title='Romance' isSmall url={romance}/>
     <RowPost title='Documentaries' isSmall url={documentaries}/>
    </div>
  );
}

export default App;
