import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Beams from './animations/Beams.jsx'

const theme = createTheme(); // uses default MUI theme

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // so it doesn't block clicks
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <App />
      </div>
    </div>

   
  </ThemeProvider>
)
