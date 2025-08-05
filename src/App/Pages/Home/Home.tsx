import About from "../About/About";
import Approaches from "../Approaches/Approaches";
import CeoMessage from "../Ceo/CeoMessage";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";
import Stat from "../Stat/Stat";
import Value from "../Values/Values";
import Work from "../Work/Work";

const Home = () => {
  return (
    <>
        <Hero/>
        <CeoMessage/>
        <About/>
        <Mission/>
        <Value/>
        <Approaches/>
        <Work/>
        <Stat/>
        <Contact/>
    </>
  );
};

export default Home;
