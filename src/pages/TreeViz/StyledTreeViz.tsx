import styled from 'styled-components'

export const StyledPageLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`

export const StyledPageSideTree = styled.svg`
    padding: 32px;
    width: 50%;
    min-height: 100vh;
`

export const StyledPageSideCode = styled.div`
    border-left: 1px solid black;
    padding: 32px;
    width: 50%;
`

export const StyledNodeCircle = styled.circle<{ isActive: boolean }>`
    fill: ${props => (props.isActive ? `lime` : `white`)};
    stroke: black;
    stroke-width: 2;
`

export const StyledNodeValue = styled.text`
    pointer-events: none;
    text-anchor: middle;
`
