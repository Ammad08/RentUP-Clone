import Navbar from "./components/Navbar";
import SearchSection from "./components/Searchbar";
import PropertyType from "./components/PropertyType";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Awards from "./components/Awards";
import RecentProperty from "./components/RecentProperty";
import FeaturedAgents from "./components/Agents";
import Locations from "./components/Locations";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SearchSection/>
      <PropertyType/>
      <RecentProperty/>
      <Awards/>
      <Locations/>
      <FeaturedAgents/>
      <Pricing/>
      <Question/>
      <Footer/>
      
    </div>
  );
}
