import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Production from './pages/Production'
import Contact from './pages/Contact'
import { initializePreloading } from './utils/preload'

function App() {
    useEffect(() => {
        // Preload all videos on app initialization
        initializePreloading()
    }, [])

    return (
        <>
            <SplashScreen />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="production" element={<Production />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
