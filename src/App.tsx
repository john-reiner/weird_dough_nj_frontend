import './App.css'
import Home from './components/home/Home'
import { MantineProvider } from '@mantine/core'

function App() {

  return (
    <>
      <MantineProvider>
        <Home />

      </MantineProvider>
    </>
  )
}

export default App
