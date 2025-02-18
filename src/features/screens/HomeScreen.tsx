import React from "react";
import HeroSection from "../component/HeroSection";
import ServicesSection from "../component/OurServiceListItemSection";
import ReachUsComponent from "../component/ReachUsComponent";
import {setDangerousNavigate, useContentConfig,} from "../../base/app/Hooks";
import {useNavigate} from "react-router-dom";

const Home: React.FC = () => {
    const { contentConfig } = useContentConfig();
    const useNav = useNavigate();
    setDangerousNavigate(useNav);
    return <div style={{
        flexGrow: 1,
    }}>
        <HeroSection
            desktopHeight={"60%"}
            mobileHeight={"27%"}
            backgroundImage={
                contentConfig.heroSection1.imageBackground
            }
            description={contentConfig.heroSection1.subTitle}
        />
        <ServicesSection/>
        <ReachUsComponent/>
    </div>
};

export default Home;
