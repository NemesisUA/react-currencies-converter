import { useContext } from "react";
import { ThemeContext } from "../hoc/ThemeProvider";

export const useTheme = () => {
    return useContext(ThemeContext);
}