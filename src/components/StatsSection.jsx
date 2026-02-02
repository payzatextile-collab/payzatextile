import './StatsSection.css'

function StatsSection() {
    const stats = [
        {
            number: '20+',
            label: 'Years of Experience',
            description: 'Two decades of textile excellence'
        },
        {
            number: '30+',
            label: 'Countries Served',
            description: 'Global reach across 4 continents'
        },
        {
            number: '500+',
            label: 'Minimum Order',
            description: 'Flexible MOQ starting at 500 pcs'
        },
        {
            number: '4-6',
            label: 'Weeks Delivery',
            description: 'Fast turnaround guaranteed'
        }
    ]

    return (
        <section className="stats">
            <div className="stats__container container">
                <div className="stats__grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stats__item">
                            <span className="stats__number">{stat.number}</span>
                            <span className="stats__label">{stat.label}</span>
                            <span className="stats__description">{stat.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection
