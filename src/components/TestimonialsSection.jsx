import './TestimonialsSection.css'

function TestimonialsSection() {
    const testimonials = [
        {
            quote: "We started with a single fit collection. Now, we order three styles across two continents — and Payza never misses a deadline.",
            author: "André F.",
            role: "Fashion Retail Buyer",
            location: "France"
        },
        {
            quote: "The quality consistency across 40,000+ units was remarkable. Their fabric compliance exceeded our strict Middle East standards.",
            author: "Mohammed K.",
            role: "Uniform Supply Director",
            location: "UAE"
        },
        {
            quote: "From 1,000 to 10,000 monthly units in just 4 seasons. Payza's scalability and sample speed made our e-commerce growth possible.",
            author: "Klaus M.",
            role: "E-commerce Brand Owner",
            location: "Germany"
        }
    ]

    return (
        <section className="testimonials section section-light">
            <div className="testimonials__container container">
                <div className="section-header">
                    <span className="section-label">Partner Success Stories</span>
                    <h2 className="section-title heading-2">Trusted by Leading Brands Worldwide</h2>
                    <p className="section-description">
                        From Europe to the Middle East, hear how global partners
                        scaled their businesses with our premium manufacturing.
                    </p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-card__quote">
                                <svg className="testimonial-card__quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                </svg>
                                <p>{testimonial.quote}</p>
                            </div>
                            <div className="testimonial-card__author">
                                <div className="testimonial-card__avatar">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="testimonial-card__info">
                                    <span className="testimonial-card__name">{testimonial.author}</span>
                                    <span className="testimonial-card__role">{testimonial.role}</span>
                                    <span className="testimonial-card__location">{testimonial.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
