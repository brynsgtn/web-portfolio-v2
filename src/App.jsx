import './App.css'
import DotGrid from './components/DotGrid'

function App() {

  const theme = 'dark';
  return (
    <>
      <div data-theme={theme} className="h-screen bg-base-300 relative">
        {/* DotGrid background */}
        {
          theme === 'dark' &&
          <div className="absolute inset-0 z-0">
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#271e37"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        }


        {/* Content in front */}
        <h1 className="relative z-10 text-3xl font-bold underline text-red-700">
          Hello World!
        </h1>
      </div>
    </>
  )
}

export default App
