import { Link } from 'react-router-dom'
import './ProcessSection.css'

function ProcessSection() {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Briefing',
            description: 'Share your requirements, target market, preferred styles, and order quantity. We listen carefully to understand your vision.'
        },
        {
            number: '02',
            title: 'Design & Sampling',
            description: 'Select fabrics, fits, and customizations. Receive a professionally crafted sample for your approval before production.'
        },
        {
            number: '03',
            title: 'Bulk Production',
            description: 'Mass production begins with strict quality control at every checkpoint. Precision sewing and professional finishing.'
        },
        {
            number: '04',
            title: 'Packing & Delivery',
            description: 'Orders packed to your specifications and shipped globally from Turkey. FOB delivery with complete transparency.'
        }
    ]

    return (
        <section className="process section">
            <div className="process__container container">
                <div className="section-header">
                    <span className="section-label">How We Work</span>
                    <h2 className="section-title heading-2">Your Production Partner, Step by Step</h2>
                    <p className="section-description">
                        From concept to global delivery — our seamless four-step process
                        ensures every shirt meets your standards and timeline.
                    </p>
                </div>

                <div className="process__timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="process-step__marker">
                                <span className="process-step__number">{step.number}</span>
                            </div>
                            <div className="process-step__content">
                                <h3 className="process-step__title">{step.title}</h3>
                                <p className="process-step__description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="process__cta">
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Start Your Project
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection
