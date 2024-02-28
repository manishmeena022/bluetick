import Blogs from './components/Blogs.jsx';
import Connect from './components/Connect.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import Offer from './components/Offer.jsx';

function App() {
  return (
    <>
      {/* Hero section at the top of the page */}
      <HeroSection />
      
      {/* Offer section displaying what the website offers */}
      <Offer />
      
      {/* Blogs section displaying latest articles or blog posts */}
      <Blogs />
      
      {/* Connect section for users to connect with support */}
      <Connect />
      
      {/* Footer section containing company information and social links */}
      <Footer />
    </>
  );
}

export default App;
