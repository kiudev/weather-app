import { useState } from 'react'
import './App.css'
import { Time } from './components/Time'
import { ToggleSwitch } from './components/ToggleSwitch'

function App() {

  const dark = '#181818'
  const light = '#eeeeee'

  const [isLightMode, setIsLightMode] = useState(false)

  const changeTheme = () => {
    setIsLightMode(!isLightMode)
  }

  const backgroundColor = isLightMode ? dark : light

  return (
    <main style={{backgroundColor}} className=' min-h-[50vh] w-[400px] rounded-xl'>
      <header>
        <ToggleSwitch click={changeTheme}/>
      </header>
      <Time />
    </main>
  )
}

export default App
