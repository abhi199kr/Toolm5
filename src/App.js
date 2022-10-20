import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import D1 from './Components/D1';
import D2 from './Components/D2';
import About from './Components/About';
import Features from './Components/Features';
import Skills from './Components/Skills';
import Team from './Components/Team';

function App() {
  return (
    <><div className='bg-gray-100'>
    <Header/>
    <D1/>
    <D2/>
    <About/>
    <Features/>
    <Skills/>
    <Team/>
    <Footer/>

    </div>
    
    </>
  );
}

export default App;
