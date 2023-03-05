import React from 'react';
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {
    const [toggle, setToggle] = useState("Switch to dark theme");

    const { theme, setTheme } = useContext(ThemeContext);
    let global = () => {
        if (toggle === "Switch to dark theme") {
            setTheme("dark");
            setToggle("Switch to dark theme");
        } else {
            setTheme("light");
            setToggle("Switch to dark theme");
        }
    }

    return (
        <>
            <button className={`btn btn-${theme} txt-${theme}`} onClick={global} id='global-theme-toggler'>{toggle}</button>
        </>
    )

}
export { ThemeToggleButton }