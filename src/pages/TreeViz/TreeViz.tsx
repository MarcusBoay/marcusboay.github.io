import React, { useEffect, useState } from 'react'
import {
    StyledPageLayout,
    StyledPageSideTree,
    StyledPageSideCode,
    StyledNodeCircle,
    StyledNodeValue,
} from './StyledTreeViz'
import { RootState } from '../../redux/reducers'
import { NodeModel } from '../../models/TreeViz'
import { Dispatch, bindActionCreators } from 'redux'
import { RootAction } from '../../redux/actions'
import {
    getTreeFromState,
    getRootNodeFromState,
} from '../../redux/reducers/treeVisualizerReducer'
import {
    createRootNodeAction,
    updateTreeAction,
} from '../../redux/actions/treeVisualizerActions'
import { connect } from 'react-redux'

/**
 * TODO:
 * - generate trees
 * 	- manual input (details tbd, maybe just an array for now)
 * 	- dropdown (binary tree, complete, incomplete, depth, how many nodes)
 *
 * - user can pick what algo to run from dropdown (v1, no interaction with code, BFS, DFS, pre-order, post-order, in-order)
 *
 * - highlight line that is being executed and show it on tree
 *
 * - tree visuals
 */

interface TreeVizProps {
    rootNode: NodeModel
    tree: Array<NodeModel[]>
    createRootNode: (node: NodeModel) => void
}

const mapStateToProps = (state: RootState) => ({
    rootNode: getRootNodeFromState(state),
    tree: getTreeFromState(state),
})
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
    bindActionCreators(
        {
            createRootNode: createRootNodeAction,
        },
        dispatch
    )

const TreeViz: React.FunctionComponent<TreeVizProps> = ({
    rootNode,
    tree,
    createRootNode,
}) => {
    useEffect(() => {
        // test to see if nodes render correctly
        let curNode = rootNode
        rootNode.leftChild = new NodeModel(1)
        rootNode.rightChild = new NodeModel(2)
        curNode = rootNode.leftChild
        curNode.leftChild = new NodeModel(3)
        curNode.rightChild = new NodeModel(4)
        curNode = rootNode.rightChild
        curNode.leftChild = new NodeModel(5)
        curNode.rightChild = new NodeModel(6)
        curNode = rootNode.leftChild!.leftChild!
        curNode.leftChild = new NodeModel(7)
        curNode.rightChild = new NodeModel(8)
        curNode = rootNode.leftChild!.rightChild!
        curNode.leftChild = new NodeModel(9)
        curNode.rightChild = new NodeModel(10)
        curNode = rootNode.leftChild!.leftChild!.leftChild!
        curNode.leftChild = new NodeModel(11)

        createRootNode(rootNode)
    }, [])

    return (
        <StyledPageLayout>
            <StyledPageSideTree>
                <Tree tree={tree} />
            </StyledPageSideTree>
            <StyledPageSideCode>
                <p>this is where the code should live</p>
                <button onClick={() => {}}>do dfs</button>
            </StyledPageSideCode>
        </StyledPageLayout>
    )
}
const ConnectTreeViz = connect(
    mapStateToProps,
    mapDispatchToProps
)(TreeViz)
export default ConnectTreeViz

interface TreeProps {
    tree: Array<NodeModel[]>
}
const Tree: React.FunctionComponent<TreeProps> = ({ tree }) => {
    const radius: number = 20
    const spacing: number = 10
    const position: number = radius + spacing / 2

    /** TODO: lines between parent and children nodes */
    return (
        <>
            {tree.map((levelNodes, level) =>
                levelNodes.map((node, index) => (
                    <Node
                        key={String(level) + '.' + String(node.value)}
                        x={Math.pow(2, tree.length - level) * (index + 0.5)}
                        y={level + 1}
                        radius={radius}
                        position={position}
                        isActive={node.isActive}
                        value={node.value}
                    />
                ))
            )}
        </>
    )
}

interface NodeProps {
    x: number
    y: number
    radius: number
    position: number
    isActive: boolean
    value: number
}
const Node: React.FunctionComponent<NodeProps> = ({
    x,
    y,
    radius,
    position,
    isActive,
    value,
}) => {
    return (
        <g>
            <StyledNodeCircle
                cx={position * x}
                cy={4 * position * y}
                r={radius}
                isActive={isActive}
            />
            <StyledNodeValue x={position * x} y={4 * position * y} dy=".3em">
                {value}
            </StyledNodeValue>
        </g>
    )
}
