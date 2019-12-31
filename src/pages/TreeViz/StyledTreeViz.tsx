import styled from 'styled-components'
import { NodeState } from '../../models/TreeViz'

export const StyledPageLayout = styled.div`
    display: flex;
    flex-direction: row;
    background: #1f1f23;
    color: white;
    font-family: 'Courier New', Courier, monospace;
`

export const StyledPageSideTree = styled.svg`
    padding-left: 32px;
    width: 50%;
    min-height: 100vh;
`

export const StyledPageSideCode = styled.div`
    border-left: 1px solid black;
    padding: 32px;
    width: 50%;
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
`

export const StyledCodePartContainer = styled.div`
    flex-grow: 1;
`

export const StyledGenerateTreePartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
`

export const StyledGenerateTreeDetailsContainer = styled.div`

`

export const StyledGenerateTreeButtonContainer = styled.div`
    margin-left: auto;
`

export const StyledNodeCircle = styled.circle<{
    state: NodeState
    speed: number
}>`
    fill: ${props =>
        props.state === NodeState.INIT
            ? `#1F1F23`
            : props.state === NodeState.VISITING
            ? `#44B3C4`
            : props.state === NodeState.WAITING
            ? `#5757B2`
            : props.state === NodeState.VISITED && `#41637F`};
    transition: ${props => props.speed + 'ms'};
    stroke: #18cae6;
    stroke-width: 2;
    color: #18cae6;
`

export const StyledNodeValue = styled.text`
    pointer-events: none;
    text-anchor: middle;
    fill: #d0db97;
`

export const StyledNodeBranch = styled.line`
    stroke: #18cae6;
    stroke-width: 2;
`

export const StyledButton = styled.button`
    background: transparent;
    color: #EAEAEA;
    font-size: 1em;
    font-family: 'Courier New', Courier, monospace;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #EAEAEA;
    border-radius: 3px;
    transition: 0.15s ease-in-out;

    :hover {
        background: #969696;
        cursor: pointer;
    }
`