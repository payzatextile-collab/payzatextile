import './ServicesSection.css'

function ServicesSection() {
    const services = [
        {
            icon: '📦',
            title: 'Flexible MOQ Tiers',
            description: 'Orders start from just 500 pieces per model with scalable pricing that grows with your business.'
        },
        {
            icon: '📏',
            title: 'Size & Fit Options',
            description: 'Slim Fit, Regular Fit, Classic Fit — tailored precisely for your regional market requirements.'
        },
        {
            icon: '🏷️',
            title: 'Custom Labels & Tags',
            description: 'Add your own brand identity with custom labels, hangtags, and washcare instructions.'
        },
        {
            icon: '📋',
            title: 'Packaging Solutions',
            description: 'Boxed, folded, polybagged, or barcoded — configured exactly to your logistics needs.'
        },
        {
            icon: '🎨',
            title: 'Fabric & Color Customization',
            description: 'Choose from 100+ premium fabrics or send your own. Minimum 75 pieces per color.'
        },
        {
            icon: '✅',
            title: 'Sample Program',
            description: 'Try before you commit. Quality samples available in all models upon request.'
        }
    ]

    return (
        <section className="services section section-dark">
            <div className="services__container container">
                <div className="section-header">
                    <span className="section-label">Wholesale Services</span>
                    <h2 className="section-title heading-2">Tailored Solutions for Your Brand</h2>
                    <p className="section-description">
                        From flexible bulk orders to complete private labeling —
                        every detail customized to match your brand vision and market demands.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card card-glass">
                            <div className="service-card__icon">{service.icon}</div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
