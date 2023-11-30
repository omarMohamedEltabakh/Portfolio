
import Header from './Component/Header/Header';
import MainContent from './Component/MainContent/MainContent';
import Hero from './Component/Hero/Hero';
import ContactUs from './Component/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';

export default function App() {




  return <>
    <div className=" allContent">
      <Header />
      <Hero />
      <div className="divider" />
      <MainContent />
      <div className="divider" />
      <ContactUs />
      <div className="divider" />
      <Footer />

    </div>
  </>
}
