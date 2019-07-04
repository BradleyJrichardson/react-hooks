import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);

// we are passing ahook to creatContext with default calue green and a function which is the updater

export default ThemeContext;
