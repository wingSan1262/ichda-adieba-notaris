import {useState} from "react";
import {FaBeer} from "react-icons/fa";
import {colorPallette} from "../../base/app/colors";
import {BiChevronDown} from "react-icons/bi";
import {useIsPhone} from "../../base/app/Hooks";

type VerticalCarouselProps<T> = {
    height: number;
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    onChangedItem?: (item: T, index: number) => void;
    color?: string;
};

export function VerticalCarousel<T>({
                                 height,
                                 items,
                                 renderItem,
    onChangedItem
                             }: VerticalCarouselProps<T>) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isPhone = useIsPhone();

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>{
            const currIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1
            if(onChangedItem){
                onChangedItem(items[currIndex], currIndex);
            }
            return currIndex
        });
    };

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${height}px`,
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
            >
                <div
                    style={{
                        transition: "transform 0.5s ease-in-out",
                        transform: `translateY(-${currentIndex * height}px)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: `${height}px`,
                                width: "100%",
                            }}
                        >
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>


                <BiChevronDown
                    size={32}
                    onClick={nextSlide}
                    style={{
                        position: "absolute",
                        right: "45%",
                        bottom: "0px",
                        paddingTop: "8px",
                        backgroundColor: "transparent",
                        color: colorPallette.secondaryColor,
                        zIndex: 1, // Ensures the button stays on top
                    }}
                />
            </div>

        </div>
    );
}
