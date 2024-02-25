import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Statistics from './components/Statistics';
import WhyPage from './components/WhyPage';
import Prototype from './components/Prototype';
import HowPage from './components/HowPage';
// import Team from './components/Team';
// import Packages from './components/Packages';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import ScrollToTop from "react-scroll-to-top";
import OurServices from './components/OurServices';

function App() {
  return (
    <div className="bg-bgrc-color">
      <ScrollToTop className="scroll" smooth top="20" width="20px" color="white" />
      <Navbar />
      <Banner />
      <About />
      <Statistics />
      <OurServices />
      <WhyPage />
      <Prototype />
      <HowPage />
      {/* <Team />
      <Packages /> */}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
