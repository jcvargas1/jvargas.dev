import './App.css';
import NavigationBar from './components/Header';
import AboutSection from './components/About';
import ParticlesBg from 'particles-bg' // Does the background effects



function App() {

  return (
    <>
    <ParticlesBg type="polygon" num={1} bg={true} />
    <NavigationBar />
    <AboutSection/>
    </>
  );
}
export default App;


