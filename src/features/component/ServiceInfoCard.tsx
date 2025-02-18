import React from 'react';
import {IMAGE_SERVICE_1} from "../../base/resource";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";
import {colorPallette} from "../../base/app/colors";
import {useNavigate} from "react-router-dom";

type ContractDraftingCardProps = {
    image: string,
    title: string,
    description: string
}

const ContractDraftingCard: React.FC<ContractDraftingCardProps> = ({
                                                                       image,
                                                                       title,
                                                                       description
                                                                   }) => {

    const isPhone = useIsPhone();
    const { contentConfig } = useContentConfig();
    const navigate = useNavigate()
    return (
        <div style={{
            marginTop: '8px',
        }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center', // Vertically centers the content
                    justifyContent: 'space-between', // Horizontally spaces items
                    padding: '16px',
                    borderRadius: '8px',
                }}
            >
                <img
                    style={{
                        width: isPhone ? '20px' : '32px',
                        height: isPhone ? '20px' : '32px',
                        marginRight: '5%',
                    }}
                    src={image}
                />
                <div style={{
                    flex: 1,
                    marginRight: 5,
                    alignItems: 'start',
                }}>
                    <h4 style={{
                        margin: 0,
                        color: '#34495e',
                        textAlign: 'left',
                        fontSize: '18px',
                        fontWeight: 600
                    }}>
                        {title}
                    </h4>
                    <p style={{
                        textAlign: 'left',
                        color: '#7f8c8d',
                        fontSize: '14px'
                    }}>
                        {description}
                    </p>
                </div>
                <button
                    onClick={()=>{
                        const target = contentConfig.page[2]
                        navigate(target.pageRoute)
                    }}
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #b5895c',
                        borderRadius: '20px',
                        color: colorPallette.textBrown,
                        padding: '6px 12px',
                        cursor: 'pointer',
                        fontWeight: 500,
                        fontSize: '14px'
                    }}>
                    {contentConfig.labels.moreInfo}
                </button>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between', // Spacing between the endpoints
                    padding: '0 16px', // Match padding with above
                }}
            >
                <div style={{flex: 1}}/>
                <div
                    style={{
                        height: '1px',
                        width: '100%', // The width of the line
                        backgroundColor: '#bdc3c7',
                    }}
                />
                <div style={{flex: 1}}/>
            </div>
        </div>

    );
};

export default ContractDraftingCard;
