import React, {useState} from 'react';
import {colorPallette} from "../../base/app/colors";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";

const ContacUsInquirySection: React.FC = () => {
    const isPhone = useIsPhone();
    return (
        <footer
            style={{
                backgroundColor: colorPallette.blue_1F5CAB,
                color: '#ecf0f1',
                paddingLeft: '6%',
                paddingRight: '6%',
                paddingTop: '6%',
                paddingBottom: '5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {isPhone ? <ContactUsContentMobile/> : <ContactUsContent/>}
        </footer>
    );
};

const ContactUsContentMobile: React.FC = () => {
    const {contentConfig} = useContentConfig();
    const isPhone = useIsPhone();
    return <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            width: '100%',
            flexWrap: 'wrap',
            alignItems: 'flex-start', // Align columns to the top
        }}
    >
        <div
            style={{
                paddingTop: '2%',
                textAlign: 'left',
                flex: '1',
                minWidth: '150px',
            }}
        >
            <ContactForm/>
        </div>

        <div
            style={{
                flex: '1',
                textAlign: 'left',
                paddingRight: '20px',
                minWidth: '300px',
            }}
        >

            <div
                style={{cursor: 'pointer'}}
                onClick={() => window.open(contentConfig.contactDetails.mapsLink, '_blank')}
            >
                <img
                    style={{
                        paddingTop: '5%',
                        paddingBottom: '5%',
                        width: '90%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                    src={contentConfig.contactDetails.mapsImage}
                    alt="Map"
                />
            </div>

            <h3 style={{fontSize: '18px', margin: '0 0 8px', fontWeight: 'bold'}}>
                {contentConfig.companyDetail.fullName}
            </h3>
            <p style={{margin: '0 0 8px', lineHeight: '1.6'}}>
                {contentConfig.contactDetails.address}
            </p>

            <p style={{margin: '0 0 8px', fontSize: '14px'}}>
                {contentConfig.contactDetails.email}
            </p>
            <p style={{margin: '0 0 8px', fontSize: '14px'}}>
                {contentConfig.contactDetails.phone}
            </p>

            <div style={{
                width: '100%',
                height: '1px',
                margin: '1rem 0'
            }}/>

            <button
                onClick={() => window.open(contentConfig.contactDetails.mapsLink)}
                style={{
                    backgroundColor: colorPallette.secondaryColor,
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: isPhone ? '0.8rem' : '1rem',
                    cursor: "pointer",
                    padding: '0.5rem 1.5rem',
                }}>
                {contentConfig.formLabels?.getDirection}
            </button>

            <div style={{
                width: '100%',
                height: '1px',
                margin: '1rem 0',
            }}/>

        </div>

    </div>
}

const ContactUsContent: React.FC = () => {
    const {contentConfig} = useContentConfig();
    return <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            width: '100%',
            flexWrap: 'wrap',
            alignItems: 'flex-start', // Align columns to the top
        }}
    >
        <div
            style={{
                flex: '1',
                textAlign: 'left',
                paddingRight: '20px',
                minWidth: '300px',
            }}
        >
            <h3 style={{fontSize: '18px', margin: '0 0 8px', fontWeight: 'bold'}}>
                {contentConfig.companyDetail.fullName}
            </h3>
            <p style={{margin: '0 0 8px', lineHeight: '1.6'}}>
                {contentConfig.companyDetail.address}
            </p>
            {/* column */}

            <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
                <p style={{margin: '0 0 8px', fontSize: '14px'}}>
                    {contentConfig.companyDetail.email}
                </p>
                <p style={{margin: '0 0 8px', fontSize: '14px'}}>
                    {contentConfig.companyDetail.phone}
                </p>
            </div>

            <div
                style={{cursor: 'pointer'}}
                onClick={() => window.open(contentConfig.contactDetails.mapsLink, '_blank')}
            >
                <img
                    style={{
                        paddingTop: '5%',
                        paddingBottom: '5%',
                        width: '85%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                    src={contentConfig.contactDetails.mapsImage}
                    alt="Map"
                />
            </div>

            <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#ccc',
                margin: '1rem 0'
            }}/>

            <h3 style={{
                fontSize: '18px', margin: '0 0 8px', paddingTop: '16px', fontWeight: 'bold'
            }}>
                {contentConfig.companyDetail.bussinessHour}
            </h3>
            <div style={{display: 'flex', gap: '8px', marginBottom: '8px', paddingTop: '16px'}}>

                {
                    contentConfig.companyDetail.openHours.map((item, index) => {
                        return (
                            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                                <p style={{margin: '0 0 8px', fontSize: '14px'}}>
                                    {item.day}
                                </p>
                                <p style={{
                                    margin: '0 0 8px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                }}>
                                    {item.time}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
            <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#ccc',
                margin: '1rem 0'
            }}/>

        </div>

        <div
            style={{
                paddingTop: '2%',
                textAlign: 'left',
                flex: '1',
                minWidth: '150px',
            }}
        >
            <ContactForm/>
        </div>
    </div>
}

const ContactForm: React.FC = () => {
    const {contentConfig} = useContentConfig();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const styles = {
        container: {
            paddingTop: '5%',
            width: '100%',
            padding: '2rem',
            backgroundColor: colorPallette.mainColor,
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box' as const,
        },
        title: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: colorPallette.black_333,
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            borderColor: colorPallette.highlightBrow,
            color: '#333',
            fontWeight: 'bold' as const,
        },
        input: {
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderColor: colorPallette.highlightBrow,
            borderRadius: '4px',
            boxSizing: 'border-box' as const,
        },
        textarea: {
            width: '100%',
            minHeight: '150px',
            padding: '0.5rem',
            border: '1px solid #b981ff',
            borderColor: colorPallette.highlightBrow,
            borderRadius: '4px',
            boxSizing: 'border-box' as const,
            resize: 'vertical' as const,
        },
        button: {
            padding: '0.5rem 1.5rem',
            backgroundColor: '#fff',
            color: colorPallette.textBrown,
            borderColor: colorPallette.highlightBrow,
            border: '1px solid #6a4d14',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
    };

    const handleEmailSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!name.trim() || !message.trim()) {
            alert('Please fill in both your name and your inquiry.');
            return;
        }
        const subject = encodeURIComponent(`Notary Inquirement - Mr/Mrs ${name}`);
        const body = encodeURIComponent(message);
        const emailRecipient = contentConfig.companyDetail.emailClean;

        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${subject}&body=${body}`);
    };

    const handleWhatsAppSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!name.trim() || !message.trim()) {
            alert('Please fill in both your name and your inquiry.');
            return;
        }
        const whatsappMessage = encodeURIComponent(`Notary Inquirement - Mr/Mrs ${name}: ${message}`);
        const phoneNumber = contentConfig.companyDetail.waPhone;
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`);
    };


    return (
        <div style={styles.container}>
            <h2 style={styles.title}>
                {contentConfig.formLabels?.TellUsYourNeeds}
            </h2>
            <form>
                <div>
                    <label style={styles.label}>
                        {contentConfig.formLabels?.name}
                    </label>
                    <input
                        type="text"
                        placeholder={contentConfig.formLabels?.enterYourName}
                        style={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label style={styles.label}>
                        {contentConfig.formLabels?.emailAddress}
                    </label>
                    <input
                        type="email"
                        placeholder={contentConfig.formLabels?.enterYourEmailAddress}
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label style={styles.label}>Inquiry</label>
                    <textarea
                        placeholder={contentConfig.formLabels?.typeHere}
                        style={styles.textarea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div style={{width: 8, height: 8}}/>
                <button type="button" style={styles.button} onClick={handleEmailSubmit}>
                    {contentConfig.formLabels?.sendMessage}
                </button>
                <div style={{width: 8, height: 8}}/>
                <button type="button" style={styles.button} onClick={handleWhatsAppSubmit}>
                    {contentConfig.formLabels?.sendByWhatsApp}
                </button>
            </form>
        </div>
    );
};

export default ContacUsInquirySection;
