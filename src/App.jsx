import './App.css'
import DotGrid from './components/animations/DotGrid'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { useThemeStore } from './store/themeStore';

function App() {

 const { theme } = useThemeStore();
  return (
    <>
      <div data-theme={theme} className="min-h-screen bg-base-100 relative">
        {/* DotGrid background */}
        {
          theme === 'dark' &&
          <div className="absolute inset-0 z-0">
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
          </div>
        }


        {/* Content in front */}
        <div className="relative z-10 min-h-screen">
          <Header />
          <div className='max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 border border-red-500'>
            {/* Spacer to push content below header */}
            <div className="h-20"></div>
                   <HeroSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
