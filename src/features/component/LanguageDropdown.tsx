import {useState} from "react";
import {BiChevronDown, BiGlobe} from "react-icons/bi";
import {useContentConfig, useIsPhone} from "../../base/app/Hooks";
import {colorPallette} from "../../base/app/colors";

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("en");
    const isPhone = useIsPhone();
    const {setLanguageAndRestart} = useContentConfig()

    const languages = ["en", "id"];

    return (
        <div style={{ position: "relative", display: "inline-block", zIndex: 9999 }}>
            <button
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    padding: "4px",
                    paddingRight: 0,
                    border: "none",
                    borderRadius: "4px",
                    background: "transparent",
                    cursor: "pointer"
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <BiGlobe size={18} />
                <span style={{ fontSize: isPhone ? "0.7rem" : "1rem", fontWeight: "bold" }}>
                    {selectedLang.toUpperCase()}
                </span>
                <BiChevronDown size={18} />
            </button>
            {isOpen && (
                <div style={{
                    position: "absolute",
                    marginTop: "8px",
                    width: "100px",
                    background: "white",
                    borderRadius: "4px",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    overflow: "visible"
                }}>
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            style={{
                                color: colorPallette.black_333,
                                fontSize: isPhone ? "0.7rem" : "1rem",
                                display: "block",
                                width: "100%",
                                padding: "8px",
                                textAlign: "left",
                                background: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                // save
                                setSelectedLang(lang);
                                setLanguageAndRestart(lang);
                                setIsOpen(false);
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                            onMouseOut={(e) => (e.currentTarget.style.background = "white")}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;

