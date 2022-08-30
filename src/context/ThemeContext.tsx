import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ITheme } from "../theme/define";
import { Earth } from "../theme/earth";

interface IThemeContext {
    theme: ITheme;
    setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<IThemeContext>({
    theme: Earth,
    setTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext).theme;
export const useSetTheme = () => useContext(ThemeContext).setTheme;

const AppContainer = styled.div`
    color: ${props => (props.theme as ITheme).theme900};
`

export const ThemeContextProvider: React.FC<PropsWithChildren> = props => {
    const [ theme, setTheme ] = useState<ITheme>(Earth);

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme}>
            <AppContainer>{props.children}</AppContainer>
        </ThemeProvider>
    </ThemeContext.Provider>
}