import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {ContentConfig, ContentConfigEn, ContentConfigID} from "./ContentConfig";
import {NavigateFunction} from "react-router-dom";

export const useIsPhone = (): boolean => {
    const [isPhone, setIsPhone] = useState<boolean>(
        window.innerWidth / window.innerHeight < 1
    );

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth / window.innerHeight < 0.7);
        };

        window.addEventListener("resize", handleResize);
    }, []);

    return isPhone;
};

var navigateRef : NavigateFunction | undefined = undefined;
export function setDangerousNavigate(navigate: NavigateFunction){
    navigateRef = navigate;
}

const getLanguageSetting = () => {
    return sessionStorage.getItem('language') || 'en';
};

const setContentConfigByLanguage = (lang: string) => {
    return lang === 'id' ? ContentConfigID : ContentConfigEn;
};

type ContentConfigContextType = {
    contentConfig: ContentConfig;
    language: string;
    setLanguageAndRestart: (lang: string) => void;
}
const ContentConfigContext = createContext<ContentConfigContextType>({
    contentConfig: ContentConfigEn,
    language: 'en',
    setLanguageAndRestart: () => {}
});
export const ContentConfigProvider = ({ children }: { children: ReactNode }) => {
    const [contentConfig, setContentConfig] = useState(setContentConfigByLanguage(getLanguageSetting()));
    const [language, setLanguage] = useState(getLanguageSetting);

    useEffect(() => {
        if(navigateRef){
            navigateRef('/');
        }
    }, [contentConfig]);

    const setLanguageAndRestart = (lang: string) => {
        sessionStorage.setItem('language', lang);
        setLanguage(lang);
        const config = setContentConfigByLanguage(lang);
        setContentConfig(config);
    };

    useEffect(() => {
        const currentLanguage = getLanguageSetting();
        setLanguage(currentLanguage);
        setContentConfig(setContentConfigByLanguage(currentLanguage));
    }, []);

    return (
        <ContentConfigContext.Provider value={{ contentConfig, language, setLanguageAndRestart }}>
            {children}
        </ContentConfigContext.Provider>
    );
};
export const useContentConfig = () => {
    const context = useContext(ContentConfigContext);
    if (!context) {
        throw new Error('useContentConfig must be used within ContentConfigProvider');
    }
    return context;
};


