import HomeHero from "./components/hero";
import HomeAbout from "./components/about";
import HomeTeams from "./components/teams";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeTeams />
    </main>
  );
};

export default Home;
