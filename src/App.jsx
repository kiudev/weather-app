import { useState } from 'react'
import { Time } from './components/Time'
import { ToggleSwitch } from './components/ToggleSwitch'

function App() {
    const dark = 'linear-gradient(200deg, #181818 , #276EAC 450%)'
    const light = 'linear-gradient(200deg, #eeeeee , #276EAC 450%)'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? dark : light
    const textColor = isLightMode ? '#eeeeee' : '#181818'

    return (
        <main
            style={{ background: backgroundColor }}
            className="min-h-full absolute w-full p-5"
        >
            <header>
                <ToggleSwitch click={changeTheme} />
            </header>
            <section className='flex justify-center'>
                <Time
                    styleBackground={{ backgroundColor }}
                    styleText={{ color: textColor }}
                />
            </section>
        </main>
    )
}

export default App
