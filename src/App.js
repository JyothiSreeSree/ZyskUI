import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import FeaturesSection from './components/FeaturesSection';
import AnalyticsFeatureSection from './components/AnalyticsFeatureSection';
import FrequentlyAskedQueSec from './components/FrequentlyAskedQueSec';
import BlogsSection from './components/BlogsSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerSection/>
      <FeaturesSection/>
      <AnalyticsFeatureSection/>
      <FrequentlyAskedQueSec/>
      <BlogsSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
