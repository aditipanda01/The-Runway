import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import pic1 from './assets/pic1.jpeg';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.jpeg';
import blob from './assets/blob.svg';

function Header() {
  return (
    <header style={{
      width: '100%',
      background: '#ede7df',
      color: '#181818',
      display: 'flex',
      marginLeft:-100,
      gap:100,
      alignItems: 'center',
      justifyContent: 'space-between', // logo left, nav right
      padding: '2.5rem 2vw 1.5rem 2vw',
      fontFamily: 'Montserrat, Arial, sans-serif',
      letterSpacing: 2
    }}>
      <div
        style={{
          fontFamily: "'Bebas Neue', Arial, sans-serif",
          fontWeight: 700,
          fontSize: '2.2rem',
          letterSpacing: 2,
          marginLeft:200,
          marginRight: 0 // Reduce this value to move Home closer
        }}
      >
        THE RUNWAY
      </div>
      <nav style={{
        display: 'flex',
        gap: 12,
        fontWeight: 600,
        fontSize: '1.1rem',
        textTransform: 'uppercase'
      }}>
        <a href="#" style={{ color: '#181818', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#181818', textDecoration: 'none' }}>Blog</a>
        <a href="#" style={{ color: '#181818', textDecoration: 'none' }}>Profile</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      style={{
        width: '100vw',
        background: '#ede7df',
        height: 350, // <-- Fixed height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0
      }}
    >
      {/* Top grid: Pic 1 (with Pic 3 overlapping) | SKETCH TO STYLE | Pic 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', width: '100%', maxWidth: 1200, margin: '0 auto', alignItems: 'center', gap: 32, marginTop: 0 }}>
        {/* Pic 1 with Pic 3 overlapping */}
        <div style={{ position: 'relative', width: 300, height: 350, display: 'flex', justifyContent: 'flex-start' }}>
          {/* Pic 1 */}
          <img
            src={pic1}
            alt="Pic 1"
            style={{
              width: 300,
              height: 450,
              marginTop:50,
              objectFit: 'cover',
              borderRadius: 10,
              boxShadow: '0 4px 24px #0002',
              filter: 'grayscale(100%)',
              background: '#fff',
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 1
            }}
          />
          {/* Pic 3 overlapping Pic 1, starting from Pic 1's mid */}
          <img
            src={pic3}
            alt="Pic 3"
            style={{
              width: 220,
              height: 280,
              objectFit: 'cover',
              borderRadius: 10,
              boxShadow: '0 2px 12px #0002',
              filter: 'grayscale(100%)',
              background: '#181818',
              position: 'absolute',
              left: '120%',
              top: '77%',
              transform: 'translateX(-50%)',
              zIndex: 2
            }}
          />
        </div>
        {/* Center: SKETCH TO STYLE */}
        <div style={{ textAlign: 'center', position: 'relative', minHeight: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div
            className="great-vibes-regular"
            style={{
              fontSize: '8.5rem',
              color: '#b89c7d',
              fontWeight: 700,
              letterSpacing: 2,
              lineHeight: 1,
              marginBottom: 0,
              marginLeft: -40 // Try -40, -60, etc. for more overlap
            }}
          >
            Sketch
          </div>
          <div
            style={{
              fontWeight: 900,
              fontSize: '2.2rem',
              letterSpacing: 1,
              color: '#181818',
              marginTop: 0,
              
              lineHeight: 1,
              marginBottom: 8,
              fontFamily: 'Montserrat, Arial, sans-serif' // or omit for default
            }}
          >
            TO
          </div>
          <div className="great-vibes-regular" style={{ fontWeight: 900, fontSize: '5.1rem', letterSpacing: 1, color: '#181818', marginTop: 24, lineHeight: 1, marginBottom: 0 }}>
            Style
          </div>
        </div>
        {/* Pic 2 with blob layer (restored to right column) */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center' }}>
          {/* Blob layer as image */}
          <img src={blob} alt="Blob" style={{ position: 'absolute', left: '50%', top: '50%', width: 550, height: 600, transform: 'translate(-50%, -50%)', zIndex: 1, opacity: 1, pointerEvents: 'none' }} />
          {/* Pic 2 */}
          <img src={pic2} alt="Pic 2" style={{ width: 300, height: 450, objectFit: 'cover', filter: 'grayscale(100%)', position: 'relative', zIndex: 2 }} />
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section style={{ width: '100%', background: '#000', color: '#fff', textAlign: 'center', padding: '0 0 2rem 0', marginTop: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="great-vibes-regular" style={{ fontSize: '3.0rem', color: '#fff', fontWeight: 400, fontFamily: 'Great Vibes, cursive', marginBottom: 32, maxWidth: 700 }}>
        Every sketch begins with passion. Here, raw ideas meet real voices — where designers rise, and talent gets the chance to shine
      </div>
      <button style={{ background: '#fff', color: '#000', border: 'none', borderRadius: 6, padding: '14px 36px', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1, cursor: 'pointer', boxShadow: '0 2px 8px #0004', textTransform: 'uppercase' }}>
        Submit a Design
      </button>
    </section>
  );
}

function CategoriesSection() {
  const categories = ['Dress', 'Footwear', 'Bags', 'Shoes'];
  return (
    <section style={{ width: '100%', background: '#000', color: '#fff', textAlign: 'center', padding: '3rem 0 2rem 0' }}>
      <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 24, letterSpacing: 2 }}>Categories</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <div key={cat} style={{ background: '#181818', color: '#fff', borderRadius: 20, padding: '18px 44px', fontWeight: 600, fontSize: '1.2rem', border: '1px solid #444', minWidth: 120, textAlign: 'center', margin: '0 4px', letterSpacing: 1 }}>{cat}</div>
        ))}
      </div>
    </section>
  );
}

function DesignerOfTheWeekSection() {
  return (
    <section style={{ width: '100%', background: '#000', color: '#fff', textAlign: 'center', padding: '4rem 0 2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: '2rem', letterSpacing: 2, marginBottom: 24 }}>Designer of the Week</div>
      <img src={pic2} alt="Designer of the Week" style={{ width: 220, height: 320, objectFit: 'cover', borderRadius: 16, filter: 'grayscale(100%)', boxShadow: '0 4px 24px #0008', marginBottom: 18 }} />
      <div style={{ fontSize: '1.1rem', color: '#bbb', maxWidth: 400 }}>
        Emma Pearl - "For me, fashion is about storytelling. Every piece is a new chapter."
      </div>
    </section>
  );
}

function PartneredCompaniesSection() {
  return (
    <section style={{ width: '100%', background: '#000', color: '#fff', textAlign: 'center', padding: '3rem 0 2rem 0' }}>
      <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: 2, marginBottom: 24 }}>Partnered Companies</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 16 }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 2px 8px #0003' }}>
            Logo
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer style={{ width: '100%', background: '#000', color: '#fff', textAlign: 'center', padding: '2rem 0 1rem 0', fontSize: '1rem', borderTop: '1px solid #222' }}>
      <div style={{ marginBottom: 8 }}>
        <a href="#" style={{ color: '#fff', marginRight: 16, textDecoration: 'none', fontWeight: 600 }}>Home</a>
        <a href="#" style={{ color: '#fff', marginRight: 16, textDecoration: 'none', fontWeight: 600 }}>Submit</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Profile</a>
      </div>
      <div>© {new Date().getFullYear()} Designers Corner by Myntra. All rights reserved.</div>
    </footer>
  );
}

function Home() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <QuoteSection />
      <CategoriesSection />
      <DesignerOfTheWeekSection />
      <PartneredCompaniesSection />
      <FooterSection />
    </div>
  );
}

function SubmitDesign() { return null; }
function DesignDetail() { return null; }
function Login() { return null; }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitDesign />} />
        <Route path="/design/:id" element={<DesignDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
