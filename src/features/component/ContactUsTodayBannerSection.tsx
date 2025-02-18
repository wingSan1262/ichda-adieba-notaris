import React from 'react';
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";

const ContactUsTodayBannerSection: React.FC = () => {
    const isPhone = useIsPhone();
    const { contentConfig } = useContentConfig();
    return (
        <footer
            style={{
                backgroundColor: '#f4f1eb',
                paddingLeft: '6%',
                paddingRight: '6%',
                paddingTop: '10%',
                paddingBottom: '5%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            {
                isPhone ? (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '32px',
                                width: '100%',
                                paddingTop: '20%',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                            }}
                        >


                            <div
                                style={{
                                    flex: '1',
                                    minWidth: '300px',
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                    src={contentConfig.contactDetails.heroImage}
                                    alt="Contact Us"
                                />
                            </div>

                            <div
                                style={{
                                    flex: '1',
                                    textAlign: 'left',
                                    minWidth: '250px',
                                }}
                            >
                                <h5 style={{
                                    textAlign: 'center',
                                    fontSize: '40px',
                                    color: '#34495e',
                                    margin: '0 0 16px',
                                    fontWeight: 'bold',
                                }}>
                                    {contentConfig.formLabels?.contactUsToday}
                                </h5>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '32px',
                                width: '100%',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    flex: '1',
                                    textAlign: 'left',
                                    minWidth: '250px',
                                }}
                            >
                                <h2 style={{
                                    paddingLeft: '10%',
                                    fontSize: '80px',
                                    color: '#34495e',
                                    margin: '0 0 16px',
                                    fontWeight: 'bold',
                                }}>
                                    {contentConfig.formLabels?.contactUsToday}
                                </h2>
                            </div>

                            <div
                                style={{
                                    flex: '1',
                                    minWidth: '300px',
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                    src={contentConfig.contactDetails.heroImage}
                                    alt="Contact Us"
                                />
                            </div>
                        </div>
                    </>
                )
            }
        </footer>
    );
};

export default ContactUsTodayBannerSection;
