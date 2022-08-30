import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ITheme } from "../../theme/define";
import { CenteredContainer, CenteredElement } from "../style/component/centered";
import { Large } from "../style/fontSize";

const Header = styled(CenteredContainer)`
    position: relative;
    height: 8vh;
    max-height: 70px;
    background-color: ${props => (props.theme as ITheme).theme500};
    margin-bottom: 5px;
`

const Logo = styled(CenteredElement)`
    color: ${props => (props.theme as ITheme).theme100};
    font-weight: bold;
    font-size: ${Large};
`

const Body = styled.div`
    padding: 5px 10px;
`

export const Layout: React.FC<PropsWithChildren> = () => {
    return <>
        <Header>
            <Logo>Planner</Logo>
        </Header>
        <Body>
            <Outlet/>
        </Body>
    </>
}