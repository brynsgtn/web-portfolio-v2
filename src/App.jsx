import './App.css'
import DotGrid from './components/DotGrid'
import Header from './components/Header';
import { useThemeStore } from './store/themeStore';

function App() {

 const { theme } = useThemeStore();
  return (
    <>
      <div data-theme={theme} className="h-screen bg-base-100 relative">
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
        <div className="relative z-10 h-screen">
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
