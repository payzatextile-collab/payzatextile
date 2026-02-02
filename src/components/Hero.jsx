import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            {/* Video Background Placeholder - Will be replaced with Vimeo */}
            <div className="hero__video-bg">
                <div className="hero__video-overlay"></div>
                {/* Placeholder gradient background until video is provided */}
                <div className="hero__placeholder-bg"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <span className="hero__label animate-fade-in-up">Premium Shirt Manufacturing</span>
                    <h1 className="hero__title animate-fade-in-up stagger-1">
                        Crafting <span className="text-gradient">Excellence</span> in Every Stitch
                    </h1>
                    <p className="hero__description animate-fade-in-up stagger-2">
                        Partner with Istanbul's premier men's shirt manufacturer.
                        We deliver premium fabrics, custom patterns, and private label solutions
                        to global brands across 30+ countries.
                    </p>
                    <div className="hero__actions animate-fade-in-up stagger-3">
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Request Bulk Pricing
                        </Link>
                        <Link to="/production" className="btn btn-secondary btn-lg">
                            View Production
                        </Link>
                    </div>
                </div>

                <div className="hero__scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
