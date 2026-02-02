import { useEffect, useRef } from 'react'
import './StatsSection.css'

function StatsSection() {
    const sectionRef = useRef(null)
    const itemsRef = useRef([])

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animate class to trigger animation with stagger effect
                        const items = entry.target.querySelectorAll('.stats__item')
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('animate')
                            }, index * 150)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section className="stats" ref={sectionRef}>
            <div className="stats__container container">
                <div className="stats__grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stats__item" ref={(el) => itemsRef.current[index] = el}>
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
