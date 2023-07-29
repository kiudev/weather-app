import { useState } from 'react'
import { Location } from './components/Location'
import { ToggleSwitch } from './components/ToggleSwitch'
import { Footer } from './components/Footer'

function App() {
    const dark = 'linear-gradient(250deg, #181818 , #BA7173 300%)'
    const light = 'linear-gradient(250deg, #CACACA , #BA7173 300%)'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? '#181818' : '#eeeeee'

    return (
        <main
            style={{ background: backgroundColor }}
            className="min-h-screen absolute w-screen p-5"
        >
            <header>
                <ToggleSwitch click={changeTheme} />
            </header>
            <section className="mx-60">
                <Location
                    styleBackground={{ backgroundColor }}
                    styleText={{ color: textColor }}
                />
            </section>
            <footer>
                <Footer styleText={{ color: textColor }} />
            </footer>
        </main>
    )
}

export default App
