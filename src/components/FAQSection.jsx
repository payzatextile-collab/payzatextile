import { useState } from 'react'
import './FAQSection.css'

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is the minimum order quantity?",
            answer: "Our standard MOQ starts at 500 pieces per model. For custom fabric orders, the minimum is 75 pieces per color. We offer flexible pricing tiers that scale with your order volume."
        },
        {
            question: "Do you offer private label production?",
            answer: "Yes, we specialize in private label and white label production. We provide custom tags, labels, packaging, and complete branding solutions tailored to your market."
        },
        {
            question: "Can I request samples before placing a bulk order?",
            answer: "Absolutely. Samples are prepared upon request and finalized with your approval before mass production begins. This ensures complete satisfaction with quality and fit."
        },
        {
            question: "What types of shirts do you manufacture?",
            answer: "We produce high-quality cotton, linen, blended, and denim shirts in various fits and designs. This includes dress shirts, casual shirts, polo shirts, and uniform shirts — all tailored to your market preferences."
        },
        {
            question: "What is the typical production timeline?",
            answer: "Standard production takes 4-6 weeks from approval to delivery. Rush orders may be accommodated based on capacity. We maintain transparent communication throughout the process."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we export to over 30 countries across 4 continents. We offer FOB delivery from Turkey with flexible shipping arrangements to suit your logistics requirements."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq section section-dark">
            <div className="faq__container container">
                <div className="section-header">
                    <span className="section-label">Got Questions?</span>
                    <h2 className="section-title heading-2">Frequently Asked Questions</h2>
                    <p className="section-description">
                        Everything you need to know about working with us.
                        Can't find what you're looking for? Contact our team.
                    </p>
                </div>

                <div className="faq__list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
                        >
                            <button
                                className="faq-item__question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className="faq-item__icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </button>
                            <div className="faq-item__answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection
