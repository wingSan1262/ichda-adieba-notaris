import logo from '../resource/logo.svg';
import './App.css';
import '../../../src/index.css';
import {Link, Route, BrowserRouter, Routes, useNavigate, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {colorPallette} from "./colors";
import {useContentConfig, useIsPhone} from "./Hooks";
import LanguageDropdown from "../../features/component/LanguageDropdown";


const App: React.FC = () => {
    const isPhone = useIsPhone();
    const {contentConfig, language, setLanguageAndRestart} = useContentConfig();
    const ScrollToTop = () => {
        const location = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0); // Scroll to the top
        }, [location]); // Re-run whenever location changes

        return null; // This component doesn't render anything
    };
    return (
        <BrowserRouter>
            <div className="App" style={{
                width: '100%',
                display: 'flex',
                whiteSpace: 'pre-line'
            }}>
                <ScrollToTop/>
                {
                    isPhone ? <NavbarMobile/> : <Navbar/>
                }
                <Routes>
                    {
                        contentConfig.page.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.pageRoute}
                                    element={
                                        <route.Page/>} // You don't need to call `route.Page()`; just use the component directly.
                                />
                            );
                        })
                    }
                </Routes>
            </div>
        </BrowserRouter>
    );
};

const NavbarMobile: React.FC = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsPhone();
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const {contentConfig} = useContentConfig();

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 2rem',
            backgroundColor: '#F5F5F5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            boxSizing: 'border-box',
        }}>
            <button
                onClick={() => navigate('/')}
                style={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexDirection: 'column',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    background: 'transparent',  // Make background transparent to keep appearance
                    border: 'none',  // Remove default button border
                    display: 'flex',  // Ensure it's a flex container (like the div)
                }}
            >
                {"Ichda\nAdieba"}
            </button>


            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>

            <LanguageDropdown/>

            <button
                style={{
                    border: '1px solid #8B5E34',
                    borderRadius: '24px',
                    padding: '0.5rem 0.5rem',
                    background: 'none',
                    fontSize: '0.6rem',
                    color: '#8B5E34',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    const target = contentConfig.page[3]
                    navigate(target?.pageRoute ?? '')
                }}
            >
                {contentConfig.labels.getInTouch}
            </button>
            <button
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    paddingRight: 0,
                    fontSize: '1.2rem',
                }}
                onClick={toggleMenu}
            >
                ☰
            </button>
            <ul style={{
                listStyle: 'none',
                display: menuOpen ? 'block' : 'none',
                position: 'absolute',
                top: '40px', // Adjusted for better alignment
                right: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                color: colorPallette.black_333,
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
                fontSize: isMobile ? '0.7rem' : '1.5rem',
            }}>
                {
                    contentConfig.page.slice(1, 3).map((route, index) => {
                        return (
                            <li key={index} style={{margin: '0.5rem 0'}}>
                                <Link to={route.pageRoute} style={{textDecoration: 'none', color: '#333'}}>
                                    {route.pageName}
                                </Link>
                            </li>
                        );
                    })
                }

            </ul>
        </nav>
    );
};


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const {contentConfig} = useContentConfig();
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: colorPallette.mainColor + 'aa',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 500,
            boxSizing: 'border-box',
            overflow: 'visible' // Change from 'hidden' to 'visible'
        }}>
            <div
                onClick={() => navigate('/')}
                style={styles.logo}
            >{"Ichda\nAdieba"}</div>
            <ul style={styles.navLinks}>
                <div/>
                {
                    contentConfig.page.slice(1, 3).map((route, index) => {
                        return (
                            <li key={index}>
                                <Link to={route.pageRoute} style={styles.navLink}>
                                    {route.pageName}
                                </Link>
                            </li>
                        );
                    })
                }
                <div/>
            </ul>
            <div style={{width: '22%'}}/>
            <LanguageDropdown/>
            <div style={{width: 16}}/>
            <button
                style={styles.getInTouchButton}
                onClick={() => {
                    const target = contentConfig.page[3]
                    navigate(target?.pageRoute ?? '')
                }}
            >
                {contentConfig.labels.getInTouch}
            </button>
        </nav>
    );
};


export default App;


// Inline styles for different elements
const styles = {
    logo: {
        fontSize: "2rem",
        color: colorPallette.secondaryColor,
        fontWeight: "bold",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        fontWeight: "bold",
        justifyContent: "space-between", // Distributes items with space between them
        alignItems: "center", // Aligns items vertically in the center
        gap: "20px", // Adds consistent spacing between items
        margin: 0,
        padding: 0,
        flex: 1, // Ensures it spans the available space if needed
    },
    navLink: {
        fontSize: "1rem",
        textDecoration: "none",
        color: colorPallette.secondaryColor,
    },
    navLinkHover: {
        color: "#555", // You can manage hover styles dynamically using React state if needed
    },
    getInTouchButton: {
        /**
         *
         *                     backgroundColor: 'transparent',
         *                     border: '1px solid #b5895c',
         *                     borderRadius: '20px',
         *                     color: colorPallette.textBrown,
         *                     padding: '6px 12px',
         *                     cursor: 'pointer',
         *                     fontWeight: 500,
         *                     fontSize: '14px'
         */
        backgroundColor: colorPallette.brokenWhite,
        border: '1px solid #b5895c',
        borderRadius: '20px',
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        color: colorPallette.textBrown,
    },
    getInTouchButtonHover: {
        backgroundColor: "#eedc82",
    },
};
