import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Exeperience from './component/header/Exeperience/Exeperience';
import Header from './component/header/Header';
import Navbar from './component/nav/Navbar';
import Project from './component/project/Project';

function App() {




  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Exeperience />
      <Project />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
