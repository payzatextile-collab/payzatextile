import { useState, useEffect } from 'react'
import './SplashScreen.css'

function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3500) // 3.5 seconds for animation + video loading

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="splash-screen" style={{ display: isVisible ? 'flex' : 'none' }}>
            <div className="splash-screen__content">
                <div className="splash-screen__logo-wrapper">
                    <h1 className="splash-screen__logo">PAYZA</h1>
                    <div className="splash-screen__underline"></div>
                </div>
            </div>
        </div>
    )
}

export default SplashScreen
