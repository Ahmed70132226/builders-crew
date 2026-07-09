import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Architecture from './pages/Architecture';
import InteriorDesign from './pages/InteriorDesign';
import Renovation from './pages/Renovation';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';

import './App.css';

// Scroll Restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Router>
        <ScrollToTop />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen bg-black text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/interior-design" element={<InteriorDesign />} />
                <Route path="/renovation" element={<Renovation />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/get-quote" element={<GetQuote />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </>
  );
}

