import Hero from "../../components/Hero/Hero";
import StatCards from "../../components/StatCards/StatCards";
import NearestStore from "../../components/NearestStore/NearestStore";
import AddPharmacy from "../../components/AddPharmacy/AddPharmacy";
import ScrollingText from "../../components/ScrollingText/ScrollingText";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <StatCards />
      <NearestStore />
      <AddPharmacy />
      <ScrollingText />
      <Reviews />
    </main>
  );
};

export default HomePage;
