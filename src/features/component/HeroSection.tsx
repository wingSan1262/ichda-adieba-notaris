import React from "react";
import {IMAGE_HERO} from "../../base/resource";
import {colorPallette} from "../../base/app/colors";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";
import {useNavigate} from "react-router-dom";

type HeroSectionProps = {
    desktopHeight?: string
    mobileHeight?: string
    backgroundImage?: string
    description?: string
}

const HeroSection = ({
                         desktopHeight = "100%",
                         mobileHeight = "36%",
                         backgroundImage = IMAGE_HERO,
                         description = ""
                     }: HeroSectionProps
) => {
    const isPhone = useIsPhone()
    const { contentConfig } = useContentConfig();
    const navigate = useNavigate();
    return (
        <div style={{
            ...styles.container,
            height: isPhone ? mobileHeight : desktopHeight,
            backgroundImage: `url(${backgroundImage})`,
        }}>
            <div style={styles.overlay}>
                <div style={{
                    ...styles.content,
                    paddingTop: isPhone ? "20%" : "6%",
                }}>
                    <h1 style={{
                        ...styles.heading,
                        fontSize: isPhone ? "2rem" : "6rem",
                        maxWidth: isPhone ? "100%" : "50%",
                    }}>{contentConfig.labels.trustedNotaryService}</h1>
                    <p style={{
                        ...styles.description,
                        maxWidth: isPhone ? "100%" : "50%",
                    }}>
                        {description}
                    </p>
                    <button
                        onClick={() => {{
                            const target = contentConfig.page[3]
                            navigate(target.pageRoute)
                        }}}
                        style={{
                            ...styles.button,
                            padding: isPhone ? "8px 16px" : "12px 24px",
                        }}>
                        {contentConfig.labels.letsTalk}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

const styles = {
    container: {
        position: "relative" as const,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures the image covers the container, maintaining aspect ratio
        filter: "brightness(1.4)",
        overflow: "hidden", // Prevents overflow issues
    },
    overlay: {
        position: "absolute" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a dark overlay for better text visibility
        display: "flex",
        flexGrow: 1,
        alignItems: "start", // Aligns content to the top
        justifyContent: "start", // Aligns content to the left
    },
    content: {
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "8%",
        textAlign: "left" as const,
        color: "#fff",
    },
    heading: {
        fontSize: "6rem",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    description: {
        paddingTop: "1%",
        fontSize: "1rem",
        lineHeight: "1.5",
        marginBottom: "4%",
    },
    button: {
        backgroundColor: colorPallette.secondaryColor,
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "1.1rem",
        cursor: "pointer",
    },
};
