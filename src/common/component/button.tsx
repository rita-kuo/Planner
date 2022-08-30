import styled from "styled-components";
import { ITheme } from "../../theme/define";
import { Small } from "../style/fontSize";

export const FullWidthButton = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    font-size: ${Small};
    border-radius: 10px;
    border: none;
    background-color: ${props => (props.theme as ITheme).theme300};
    color: ${props => (props.theme as ITheme).theme900};
    cursor: pointer;

    &: hover {
        background-color: ${props => (props.theme as ITheme).theme400};
    }

    &: active {
        color: ${props => (props.theme as ITheme).theme100};
        background-color: ${props => (props.theme as ITheme).theme500};
    }
`