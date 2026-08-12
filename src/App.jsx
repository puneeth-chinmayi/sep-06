import Hero from "./sections/Hero";
import DateSection from "./sections/DateSection";
import VenueSection from "./sections/VenueSection";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  return (
    <main>
      <MusicPlayer />
      <Hero />
      <DateSection />
      <VenueSection />
    </main>
  );
}

export default App;