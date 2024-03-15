import { useState } from "react";
import Home from './home/Home';
import About from "./about/About";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import { Overlay } from "../components";
import { useEffect } from "react";
import Project from "./project/Project";

const Layout = () => {
    const [screen, setScreen] = useState(4);
    const [overlayActive, setOverlayActive] = useState('');
    const [delay, setDelay] = useState(true);

    const handleClick = (id) => {
        setDelay(false)
        setOverlayActive('overlay-up');
        setScreen(id);
    }

    const handleBackHome = () => {
        setDelay(false)
        setOverlayActive('overlay-down');
        setScreen(0);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelay(true);
        }, 1000)

        return () => clearTimeout(timeout)
    }, [screen])

    const render = (screen) => {
        switch (screen) {
            case 0:
                return <Home handeClickChangeScreen={handleClick} />;
            case 1:
                return <About handleClickBackToHome={handleBackHome} />;
            case 2:
                return <Resume handleClickBackToHome={handleBackHome} />;
            case 3:
                return <Project handleClickBackToHome={handleBackHome} />;
            case 4:
                return <Contact handleClickBackToHome={handleBackHome} />;
        }
    }

    return (
        <>
            <Overlay classActive={overlayActive}></Overlay>
            {delay && render(screen)}
        </>
    );
};

export default Layout;