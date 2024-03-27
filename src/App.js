import logo from './logo.svg';
import './App.css'
import NavBar from './NavBar';
import MainBanner from './MainBanner';
import FeatureCarousel from './FeatureCarousel';
import KeyBenefits from './KeyBenefits';
import ClientLogo from './ClientLogo';
import HowItWorks from './HowItWorks';
import CaseStudy from './CaseStudy';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      <MainBanner />
      <FeatureCarousel />
      <KeyBenefits />
      <ClientLogo />
      <HowItWorks />
      <CaseStudy />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
