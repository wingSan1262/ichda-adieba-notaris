import React from 'react';
import {colorPallette} from "../../base/app/colors";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";
import {Link} from "react-router-dom";

const ReachUsSection: React.FC = () => {
    const isPhone = useIsPhone();
    const { contentConfig } = useContentConfig();
    return (
        <footer
            style={{
                backgroundColor: '#2c3e50',
                color: '#ecf0f1',
                paddingLeft: '6%',
                paddingRight: '6%',
                paddingTop: '2%',
                paddingBottom: '5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h2
                style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    flexGrow:1,
                    marginBottom: '16px',
                    borderBottom: '1px solid #ecf0f1',
                    paddingBottom: '16px',
                    width: '100%',
                }}
            >
                {contentConfig.contactDetails.reachUs}
            </h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                    borderBottom: '1px solid #ecf0f1',
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
                        minWidth: '250px',
                        borderBottom: isPhone ? '1px solid #ecf0f1' : 'none',
                    }}
                >
                    <h3 style={{ fontSize: '18px', margin: '0 0 8px', fontWeight: 'bold' }}>
                        {contentConfig.companyDetail.fullName}
                    </h3>
                    <p style={{ margin: '0 0 8px', lineHeight: '1.6' }}>
                        {contentConfig.companyDetail.address}
                    </p>
                    <p style={{ margin: '0 0 8px' }}>
                        {contentConfig.companyDetail.email}
                    </p>
                    <p style={{ margin: '0 0 8px' }}>
                        {contentConfig.companyDetail.phone}
                    </p>
                </div>

                <div
                    style={{
                        textAlign: 'left',
                        flex: '1',
                        minWidth: '150px',
                        borderBottom: isPhone ? '1px solid #ecf0f1' : 'none',
                    }}
                >
                    <ul
                        style={{
                            fontWeight: "bold",
                            listStyle: 'none',
                            padding: '0',
                            paddingLeft:isPhone ? '0' : '15%',
                            margin: '0',
                            marginBottom: 10,
                            lineHeight: isPhone ? '2' : '3.6',
                        }}
                    >
                        {
                            contentConfig.page.slice(1).map((page) => (
                                <li key={page.pageName}>
                                    <Link to={page.pageRoute} style={{ color: '#CEE0FD', textDecoration: 'none' }}>
                                        {page.pageName}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div
                    style={{
                        padding: '0',
                        margin: '0',
                        flex: '1',
                        justifyContent: 'center',
                        height: '100%',
                        textAlign: 'center',
                        minWidth: '250px',
                    }}
                >
                    <h2
                        style={{
                            padding: '0',
                            height: "36px",
                            marginTop: 0,
                            marginBottom: 12,
                            textAlign: 'left',
                            fontSize: isPhone ? '16px' : '28px',
                            fontWeight: 'bold',
                        }}
                    >
                        {contentConfig.companyDetail.companyJargonName}
                    </h2>
                </div>
            </div>

            <div
                style={{
                    marginTop: '24px',
                    textAlign: 'center',
                    color: colorPallette.brokenWhite + '80',
                    fontSize: '14px',
                    paddingTop: '16px',
                    width: '100%',
                }}
            >
                {contentConfig.contactDetails.tradeMark}
            </div>
        </footer>
    );
};

export default ReachUsSection;
