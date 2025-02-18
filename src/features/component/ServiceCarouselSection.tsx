import React, {useState} from "react";
import {colorPallette} from "../../base/app/colors";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";
import {VerticalCarousel} from "./VerticalCarousel";


export const ServiceCarouselComponent: React.FC = () => {
    const { contentConfig } = useContentConfig();
    const [currentItem, setCurrentItem] = useState(contentConfig.ourServicesList[0]);
    return (
        <div style={{
            position: "relative" as const,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            backgroundColor: colorPallette.mainColor,
            filter: "brightness(1.4)",
            overflow: "hidden", // Prevents overflow issues
        }}>

            <div style={{
                flex: 0.45,
                height: "400px",
                overflow: "hidden",
                width: "50%",
                paddingLeft: "6%",
            }}>
                <VerticalCarousel
                    height={380} items={contentConfig.ourServicesList}
                    onChangedItem={(item, _) => setCurrentItem(item)}
                    renderItem={
                        (item, index) => <div
                            key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "left",
                            justifyContent: "center",
                            height: "400px",
                            gap: "16px",
                            width: "100%",
                            color: colorPallette.secondaryColor,
                            backgroundColor: "transparent",
                            fontSize: "24px",
                        }}
                        >
                            <div style={{
                                width: "100%",
                                alignItems: "start",
                                margin: "0",
                                padding: "0",
                                height: "24px",
                                objectFit: "contain"
                            }}>
                                <img src={item.logo} alt="example" style={{
                                    width: "24px",
                                    alignItems: "start",
                                    margin: "0",
                                    padding: "0",
                                    height: "24px",
                                    objectFit: "contain"
                                }}/>
                            </div>

                            <h4 style={{
                                margin: "0",
                                padding: "0",
                                width: "100%",
                                textAlign: "left"
                            }}>{item.title}</h4>
                            <p style={{
                                fontSize: "18px",
                                margin: "0",
                                padding: "0",
                                width: "100%",
                                textAlign: "left"
                            }}> {item.longDescription}</p>
                        </div>
                    }/>
            </div>

            <div style={{
                flex: 0.55,
                overflow: "hidden",
                display: "flex",          // Flexbox to enable centering
                alignItems: "center",     // Vertical centering
                justifyContent: "center", // Horizontal centering
                height: "400px",
                paddingRight: "2%",
            }}>
                <img
                    style={{
                        overflow: "hidden",
                        backgroundPosition: "center",
                        objectFit: "cover",
                        width: "90%",
                        height: "65%",
                    }}
                    src={currentItem.image} alt="example"
                />
            </div>
        </div>
    );
};


export const ServiceCarouselComponentMobile: React.FC = () => {
    const isPhone = useIsPhone();
    const { contentConfig } = useContentConfig();
    const height = 400;
    return (
        <div style={{
            position: "relative" as const,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            backgroundColor: colorPallette.mainColor,
            filter: "brightness(1.4)",
            overflow: "hidden", // Prevents overflow issues
        }}>

            <div style={{
                height: `${height}px`,
                overflow: "hidden",
                width: "100%",
                paddingLeft: "6%",
                paddingRight: "6%",
            }}>
                <VerticalCarousel
                    height={height} items={contentConfig.ourServicesList}
                    onChangedItem={(item, _) => {}}
                    renderItem={
                        (item, index) => <div
                            key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "left",
                            justifyContent: "center",
                            height: `${height}px`,
                            width: "100%",
                            color: colorPallette.secondaryColor,
                            backgroundColor: "transparent",
                            fontSize: "24px",
                        }}
                        >
                            <div style={{
                                paddingTop: "8px",
                                overflow: "hidden",
                                display: "flex",          // Flexbox to enable centering
                                alignItems: "center",     // Vertical centering
                                justifyContent: "center", // Horizontal centering
                                height: height * 0.4,
                                width: "100%",
                            }}>
                                <img
                                    style={{
                                        overflow: "hidden",
                                        backgroundPosition: "center",
                                        width: "100%",
                                        height: height * 0.4,
                                        objectFit: "cover"
                                    }}
                                    src={item.image} alt="example"
                                />
                            </div>
                            <div style={{
                                width: "100%",
                                alignItems: "start",
                                margin: "0",
                                height: "24px",
                                objectFit: "contain"
                            }}>
                                <img src={item.logo} alt="example" style={{
                                    width: "24px",
                                    alignItems: "start",
                                    margin: "0",
                                    padding: "0",
                                    height: "24px",
                                    objectFit: "contain"
                                }}/>
                            </div>

                            <h5 style={{
                                margin: "0",
                                paddingTop: "8px",
                                width: "100%",
                                textAlign: "left"
                            }}>{item.title}</h5>
                            <p style={{
                                fontSize: "12px",
                                margin: "0",
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                height: "25%",
                                paddingTop: "8px",
                                paddingBottom: "16px",
                                width: "100%",
                                textAlign: "left"
                            }}>
                                {item.longDescription}
                            </p>
                        </div>
                    }/>
            </div>

        </div>
    );
};
