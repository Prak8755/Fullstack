
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/companies/Companies';
import Residencies from './components/residencies/Residencies';
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import Getstarted from './components/getstarted/Getstarted';
import Footer from './components/footer/Footer';



function App() {
  return (
   <>
   <div className='app'>
   <div>
    <div className='white-gradient'/>
   <Header/>
   <Hero/>
   </div>
<Companies/>
<Residencies/>
<Value/>
<Contact/>
<Getstarted/>
<Footer/>
   </div>
   </>
  );
}

export default App;
