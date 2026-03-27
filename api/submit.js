const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        const { fields, parentName } = req.body;

        if (!fields || !Array.isArray(fields) || fields.length === 0) {
            return res.status(400).json({ success: false, error: 'No form data received.' });
        }

        // We use Environment Variables for security in Vercel
        const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

        if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
            console.error('Missing Email Configuration in Vercel Environment Variables');
            return res.status(500).json({ success: false, error: 'Server misconfiguration: Missing email credentials.' });
        }

        const timestamp = new Date().toLocaleString('es-PE', { 
            timeZone: 'America/Lima',
            dateStyle: 'full',
            timeStyle: 'short'
        });

        // ── HTML Email Template ──
        let htmlBody = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 0;">
                <div style="background: linear-gradient(135deg, #0a84ff, #5e5ce6); padding: 32px 24px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">Ascend by Paradise</h1>
                    <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Nueva Solicitud de Consultoría</p>
                </div>
                <div style="padding: 24px;">
                    <p style="color: #666; font-size: 13px; margin-bottom: 20px;">
                        📅 Recibido: ${timestamp}
                    </p>
                    <table style="width: 100%; border-collapse: collapse;">
        `;

        fields.forEach((field, i) => {
            const bgColor = i % 2 === 0 ? '#ffffff' : '#f8f9fa';
            htmlBody += `
                <tr style="background: ${bgColor};">
                    <td style="padding: 12px 16px; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; vertical-align: top; width: 35%; border-bottom: 1px solid #eee;">
                        ${field.label}
                    </td>
                    <td style="padding: 12px 16px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">
                        ${field.value || '—'}
                    </td>
                </tr>
            `;
        });

        htmlBody += `
                    </table>
                </div>
                <div style="background: #f0f0f0; padding: 16px 24px; text-align: center; font-size: 12px; color: #999;">
                    Generado automáticamente por Ascend by Paradise
                </div>
            </div>
        `;

        let textBody = `ASCEND BY PARADISE — Nueva Solicitud\nRecibido: ${timestamp}\n${'─'.repeat(40)}\n\n`;
        fields.forEach(f => { textBody += `${f.label}: ${f.value || '—'}\n`; });

        // ── Nodemailer Transporter ──
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        const safeName = parentName || 'Nuevo Interesado';
        
        await transporter.sendMail({
            from: `"Ascend by Paradise" <${EMAIL_USER}>`,
            to: EMAIL_TO,
            subject: `📋 Nueva Consulta — ${safeName}`,
            text: textBody,
            html: htmlBody,
        });

        console.log(`✅ Email sent for: ${safeName}`);
        res.status(200).json({ success: true, message: 'Consultation request sent successfully.' });

    } catch (error) {
        console.error('❌ Email error:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Could not send email. Please try again later.' 
        });
    }
}
