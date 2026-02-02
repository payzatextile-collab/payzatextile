import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { name, email, company, phone, orderType, quantity, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email and message are required' })
    }

    // Email template with professional design
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header with Logo -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #0A1628 0%, #1a2d4a 100%); padding: 32px 40px; text-align: center;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center">
                                        <h1 style="margin: 0; font-family: 'Times New Roman', Georgia, serif; font-size: 32px; font-weight: 400; letter-spacing: 8px; color: #C9A962;">
                                            PAYZA
                                        </h1>
                                        <p style="margin: 8px 0 0 0; font-size: 11px; letter-spacing: 3px; color: rgba(255, 255, 255, 0.7); text-transform: uppercase;">
                                            Premium Textile Manufacturing
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Title Section -->
                    <tr>
                        <td style="padding: 32px 40px 16px 40px; border-bottom: 1px solid #C9A962;">
                            <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #0A1628;">
                                New Inquiry Received
                            </h2>
                            <p style="margin: 8px 0 0 0; font-size: 14px; color: #666;">
                                A potential client has submitted a contact form on your website.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Contact Details -->
                    <tr>
                        <td style="padding: 24px 40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                        <span style="display: inline-block; width: 120px; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">Name</span>
                                        <span style="font-size: 15px; color: #0A1628; font-weight: 500;">${name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                        <span style="display: inline-block; width: 120px; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                                        <a href="mailto:${email}" style="font-size: 15px; color: #C9A962; text-decoration: none;">${email}</a>
                                    </td>
                                </tr>
                                ${company ? `
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                        <span style="display: inline-block; width: 120px; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">Company</span>
                                        <span style="font-size: 15px; color: #0A1628;">${company}</span>
                                    </td>
                                </tr>
                                ` : ''}
                                ${phone ? `
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                        <span style="display: inline-block; width: 120px; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">Phone</span>
                                        <a href="tel:${phone}" style="font-size: 15px; color: #0A1628; text-decoration: none;">${phone}</a>
                                    </td>
                                </tr>
                                ` : ''}
                                ${orderType ? `
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                        <span style="display: inline-block; width: 120px; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">Order Type</span>
                                        <span style="font-size: 15px; color: #0A1628;">${orderType}</span>
                                    </td>
                                </tr>
                                ` : ''}
                                ${quantity ? `
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                        <span style="display: inline-block; width: 120px; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">Quantity</span>
                                        <span style="font-size: 15px; color: #0A1628; font-weight: 500;">${quantity}</span>
                                    </td>
                                </tr>
                                ` : ''}
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Message Section -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; border-left: 4px solid #C9A962;">
                                <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 1px;">
                                    Message
                                </p>
                                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333;">
                                    ${message.replace(/\n/g, '<br>')}
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Reply Button -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;" align="center">
                            <a href="mailto:${email}?subject=Re: Your Inquiry to Payza Textile" 
                               style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #C9A962 0%, #D4B978 100%); color: #0A1628; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 6px; text-transform: uppercase; letter-spacing: 1px;">
                                Reply to ${name.split(' ')[0]}
                            </a>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #0A1628; padding: 24px 40px; text-align: center;">
                            <p style="margin: 0 0 8px 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                                This message was sent from the Payza Textile website contact form.
                            </p>
                            <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.3);">
                                © ${new Date().getFullYear()} Payza Textile. Istanbul, Turkey.
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim()

    try {
        const data = await resend.emails.send({
            from: 'Payza Textile <onboarding@resend.dev>',
            to: ['info@payzatextile.com'],
            replyTo: email,
            subject: `New Inquiry: ${name}${company ? ` from ${company}` : ''}`,
            html: emailHtml,
            text: `New contact form submission from ${name} (${email}).\n\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\nOrder Type: ${orderType || 'N/A'}\nQuantity: ${quantity || 'N/A'}\n\nMessage:\n${message}`
        })

        return res.status(200).json({ success: true, data })
    } catch (error) {
        console.error('Resend error:', error)
        return res.status(500).json({ error: 'Failed to send email' })
    }
}
