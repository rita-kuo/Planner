import styled from "styled-components";

export const CenteredContainer = styled.div`
    position: relative;
`

export const VerticalCenteredElement = styled.div`
    position: absolute;
    height: max-content;
    top: 0;
    bottom: 0;
    margin: auto;
`

export const HorizontalCenteredElement = styled.div`
    position: absolute;
    width: max-content;
    left: 0;
    right: 0;
    margin: auto;
`

export const CenteredElement = styled.div`
    width: max-content;
    height: max-content;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`