import { Link } from 'react-router-dom'
import './BrandsSection.css'

function BrandsSection() {
    const brands = [
        {
            name: 'Boucheron',
            tagline: 'Refined. Contemporary. European-Fit.',
            description: 'Designed for high-end retail and premium boutiques. Featuring satin finish fabrics, stretch cotton, and Italian buttons.',
            fits: ['Slim Fit', 'Regular Fit', 'Classic Fit'],
            highlight: 'Premium Collection'
        },
        {
            name: 'Loranzo',
            tagline: 'Corporate Elegance, Everyday Strength.',
            description: 'Tailored for businesswear and uniform supply chains. Easy-care poplin and anti-wrinkle blends for the modern professional.',
            fits: ['Slim Fit', 'Regular Fit', 'Classic Fit'],
            highlight: 'Business Collection'
        },
        {
            name: 'Payza',
            tagline: 'Timeless Turkish Craftsmanship.',
            description: 'Best choice for mainstream retail and global distributors. Classic broadcloth, oxford, and checked cotton designs.',
            fits: ['Slim Fit', 'Regular Fit', 'Classic Fit'],
            highlight: 'Classic Collection'
        }
    ]

    return (
        <section className="brands section">
            <div className="brands__container container">
                <div className="section-header">
                    <span className="section-label">Three Brands, One Standard</span>
                    <h2 className="section-title heading-2">Excellence Across Every Market</h2>
                    <p className="section-description">
                        Whether your focus is luxury, corporate wear, or timeless classics —
                        our specialized brands are designed to meet diverse global market demands with precision.
                    </p>
                </div>

                <div className="brands__grid">
                    {brands.map((brand, index) => (
                        <div key={index} className="brand-card">
                            <div className="brand-card__header">
                                <span className="brand-card__highlight">{brand.highlight}</span>
                                <h3 className="brand-card__name">{brand.name}</h3>
                                <p className="brand-card__tagline">{brand.tagline}</p>
                            </div>
                            <div className="brand-card__content">
                                <p className="brand-card__description">{brand.description}</p>
                                <div className="brand-card__fits">
                                    <span className="brand-card__fits-label">Available Fits:</span>
                                    <div className="brand-card__fits-list">
                                        {brand.fits.map((fit, i) => (
                                            <span key={i} className="brand-card__fit">{fit}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="brands__cta">
                    <Link to="/about" className="btn btn-outline">
                        Learn More About Our Brands
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BrandsSection
