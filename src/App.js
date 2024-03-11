import NucampLogo from './app/assets/img/logo.png';
import Header from './components/Header';
import './App.css';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsitesList from './features/campsites/CampsitesList.js';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;