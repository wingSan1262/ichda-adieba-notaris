import React from "react";
import HeroSection from "../component/HeroSection";
import {ServiceCarouselComponent} from "../component/ServiceCarouselSection";
import ContactUsInquirySection from "../component/ContactUsInquirySection";
import ReachUsComponent from "../component/ReachUsComponent";
import ContactUsTodayBannerSection from "../component/ContactUsTodayBannerSection";
const ContactScreen: React.FC = () => {
    return <div style={{
        flexGrow: 1,
    }}>
        <ContactUsTodayBannerSection/>
        <ContactUsInquirySection/>
        <ReachUsComponent/>
    </div>
};

export default ContactScreen;
