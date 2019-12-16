import styled from 'styled-components'
import { NodeState } from '../../models/TreeViz'

export const StyledPageLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    background: #1f1f23;
    color: white;
    font-family: 'Courier New', Courier, monospace;
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
