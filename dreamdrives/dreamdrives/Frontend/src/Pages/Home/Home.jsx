import './../../App.css';
import Navbar from './../../Components/Navbar/Navbar';
import Hero from './../../Components/Hero/Hero.jsx';
import Welcome from './../../Components/Welcome/welcome.jsx';
import Clients from'./../../Components/Clients/Clients.jsx';
import Choseus from './../../Components/Choseus/choseus.jsx';
import Footer from'./../../Components/Footer/Footer.jsx';
import Testimonials from './../../Components/Testimonials/Testimonails.jsx';


function Home() {

  return (
    
    <div className="App">
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Clients/>
      <Choseus/>
      <Testimonials/>
      <Footer/>
          </div>
  );
}

export default Home;
