import './App.css'
import DotGrid from './components/animations/DotGrid'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FloatingShape from './components/animations/FloatingShape';
import { useThemeStore } from './store/themeStore';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import WhatIBuilt from './components/WhatIBuilt';
import OtherProjects from './pages/OtherProjects';
import { Route, Routes } from 'react-router';

function App() {

  const { theme } = useThemeStore();
  return (
    <>
      <div data-theme={theme} className="min-h-screen relative">
        {/* Background */}

        <div className="absolute inset-0 z-0">
          {theme === 'dark' ? (
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#112240"
              activeColor="#64ffda"
              proximity={180}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          ) : (
            <>
              <FloatingShape
                color="bg-stone-800"
                size="w-64 h-64"
                top="-5%"
                left="10%"
                delay={0}
              />
              <FloatingShape
                color="bg-stone-800"
                size="w-48 h-48"
                top="70%"
                left="80%"
                delay={5}
              />
              <FloatingShape
                color="bg-stone-800"
                size="w-32 h-32"
                top="40%"
                left="-10%"
                delay={2}
              />
            </>

          )}

        </div>

        {/* Content in front */}
        <div className="relative z-10 min-h-screen">
          <Header />

          <div className='max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 '>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <AboutMe />
                  <WhatIDo />
                  <WhatIBuilt />
                </>
              } />
              <Route path="/other-projects" element={<OtherProjects />} />
            </Routes>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
