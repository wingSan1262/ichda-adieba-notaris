import React from "react";
import ContractDraftingCard from "./ServiceInfoCard";
import {colorPallette} from "../../base/app/colors";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";


const ServicesSection: React.FC = () => {
    const isPhone = useIsPhone();
    const { contentConfig } = useContentConfig();
    return (
        <section style={{
            backgroundColor: colorPallette.mainColor,
            paddingTop: "5%",
            paddingBottom: "7%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <div style={{
                textAlign: 'left',
            }}>
                <h2 style={{
                    fontSize: isPhone ? '2rem' : '6rem',
                    fontWeight: '800',
                    color: colorPallette.secondaryColor,
                    margin: '0'
                }}>
                    <span style={{display: 'block'}}>OUR</span>
                    <span style={{display: 'block', marginLeft: 48}}>SERVICES</span>
                </h2>
            </div>
            <div style={{
                gap: '1rem',
                width: isPhone ? '96%' : '80%',
                marginTop: '1rem'
            }}>
                {contentConfig.ourServicesList.map((service, index) => (
                    <ContractDraftingCard
                        image={service.logo}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
