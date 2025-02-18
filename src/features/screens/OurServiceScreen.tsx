import React from "react";
import HeroSection from "../component/HeroSection";
import ReachUsComponent from "../component/ReachUsComponent";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";
import {ServiceCarouselComponent, ServiceCarouselComponentMobile} from "../component/ServiceCarouselSection";

const OurServiceScreen: React.FC = () => {
    const isPhone = useIsPhone();
    const { contentConfig } = useContentConfig();
    return <div style={{
        flexGrow: 1,
    }}>
        <HeroSection
            desktopHeight={"100%"}
            mobileHeight={"50%"}
            backgroundImage={
                contentConfig.heroSection2.imageBackground
            }
            description={contentConfig.heroSection2.subTitle}
        />
        {isPhone ? <ServiceCarouselComponentMobile/> : <ServiceCarouselComponent/>}
        <ReachUsComponent/>
    </div>
};

export default OurServiceScreen;
