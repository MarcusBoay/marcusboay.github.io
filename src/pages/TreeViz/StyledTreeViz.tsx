import styled from 'styled-components'
import { NodeState } from '../../models/TreeViz'

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

export const StyledNodeCircle = styled.circle<{
    state: NodeState
}>`
    fill: ${props =>
        props.state === NodeState.INIT
            ? `white`
            : props.state === NodeState.VISITING
            ? `green`
            : props.state === NodeState.WAITING
            ? `cyan`
            : props.state === NodeState.VISITED && `lime`};
    stroke: black;
    stroke-width: 2;
`

export const StyledNodeValue = styled.text`
    pointer-events: none;
    text-anchor: middle;
`

export const StyledNodeBranch = styled.line`
    stroke: black;
    stroke-width: 2;
`
