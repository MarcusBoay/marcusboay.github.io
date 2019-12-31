import React, { useEffect, Fragment } from 'react'
import {
    StyledPageLayout,
    StyledPageSideTree,
    StyledPageSideCode,
    StyledNodeCircle,
    StyledNodeValue,
    StyledNodeBranch,
    StyledButton,
    StyledGenerateTreePartContainer,
    StyledCodePartContainer,
    StyledGenerateTreeButtonContainer,
    StyledGenerateTreeDetailsContainer,
} from './StyledTreeViz'
import { RootState } from '../../redux/reducers'
import { NodeModel, GenNodeValueType } from '../../models/TreeViz'
import { Dispatch, bindActionCreators } from 'redux'
import { RootAction } from '../../redux/actions'
import {
    getTreeFromState,
    getRootNodeFromState,
    getExecutionSpeedFromState,
    getGenHeightFromState,
    getGenIsBSTreeFromState,
    getGenNodeValueTypeFromState,
} from '../../redux/reducers/treeVisualizerReducer'
import {
    createRootNodeAction,
    preOrderTraversalAction,
    inOrderTraversalAction,
    resetNodesAction,
    postOrderTraversalAction,
    levelOrderTraversalAction,
    updateExecutionSpeedAction,
    generateTreeAction,
    putGenHeightAction,
    putGenIsBSTreeAction,
    putGenNodeValueTypeAction,
} from '../../redux/actions/treeVisualizerActions'
import { connect } from 'react-redux'

/**
 * TODO:
 * - generate trees :
 * 	- dropdown (binary tree, complete, incomplete, depth, how many nodes)
 *
 * - user can pick what algo to run from dropdown (v1, no interaction with code, BFS, DFS, pre-order, post-order, in-order)
 *
 * - highlight line of code that is being executed and show it on tree
 *
 * - adding nodes, updating nodes, deleting nodes (by user)
 *
 * - dropdown of algo
 *
 * - visual sexiness
 *
 * -
 *
 * v2:
 * - if nodes have no children, make them visuallly closer
 * - make radius of nodes smaller if tree is out of bounds
 * - zoom on canvas
 * - sliding window (to minimize the code side)?
 * - pause (research)
 * - undo
 * - play from left of state from undo
 */

interface TreeVizProps {
    rootNode: NodeModel
    tree: Array<NodeModel[]>
    executionSpeed: number
    genHeight: number
    genIsBSTree: boolean
    genNodeValueType: GenNodeValueType
    createRootNode: (node: NodeModel) => void
    resetNodes: () => void
    preOrderTraversal: () => void
    inOrderTraversal: () => void
    postOrderTraversal: () => void
    levelOrderTraversal: () => void
    updateExecutionSpeed: (speed: number) => void
    generateTree: () => void
    putGenTreeHeight: (genHeight: number) => void
    putGenIsBSTree: (genIsBST: boolean) => void
    putGenNodeValueType: (genNodeValueType: GenNodeValueType) => void
}

const mapStateToProps = (state: RootState) => ({
    rootNode: getRootNodeFromState(state),
    tree: getTreeFromState(state),
    executionSpeed: getExecutionSpeedFromState(state),
    genHeight: getGenHeightFromState(state),
    genIsBSTree: getGenIsBSTreeFromState(state),
    genNodeValueType: getGenNodeValueTypeFromState(state),
})
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
    bindActionCreators(
        {
            createRootNode: createRootNodeAction,
            resetNodes: resetNodesAction,
            preOrderTraversal: preOrderTraversalAction,
            inOrderTraversal: inOrderTraversalAction,
            postOrderTraversal: postOrderTraversalAction,
            levelOrderTraversal: levelOrderTraversalAction,
            updateExecutionSpeed: updateExecutionSpeedAction,
            generateTree: generateTreeAction,
            putGenTreeHeight: putGenHeightAction,
            putGenIsBSTree: putGenIsBSTreeAction,
            putGenNodeValueType: putGenNodeValueTypeAction,
        },
        dispatch
    )

const TreeViz: React.FunctionComponent<TreeVizProps> = ({
    rootNode,
    tree,
    executionSpeed,
    createRootNode,
    resetNodes,
    preOrderTraversal,
    inOrderTraversal,
    postOrderTraversal,
    levelOrderTraversal,
    updateExecutionSpeed,
    generateTree,
    putGenTreeHeight,
    putGenIsBSTree,
    putGenNodeValueType,
    genHeight,
    genIsBSTree,
    genNodeValueType,
}) => {
    useEffect(() => {
        // initial set of nodes
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
                <Tree tree={tree} speed={executionSpeed} />
            </StyledPageSideTree>
            <StyledPageSideCode>
                <StyledCodePartContainer>
                    <p>this is where the code should live</p>
                    <StyledButton
                        onClick={() => {
                            preOrderTraversal()
                        }}
                    >
                        pre order
                    </StyledButton>
                    <button
                        onClick={() => {
                            inOrderTraversal()
                        }}
                    >
                        in order
                    </button>
                    <button
                        onClick={() => {
                            postOrderTraversal()
                        }}
                    >
                        post order
                    </button>
                    <button
                        onClick={() => {
                            levelOrderTraversal()
                        }}
                    >
                        level order
                    </button>
                    <button
                        onClick={() => {
                            resetNodes()
                        }}
                    >
                        reset
                    </button>
                    <div>
                        <input
                            type="range"
                            min="50"
                            max="3000"
                            value={executionSpeed}
                            onChange={event => {
                                updateExecutionSpeed(Number(event.target.value))
                            }}
                        />
                        <span>Speed</span>
                    </div>
                </StyledCodePartContainer>
                <StyledGenerateTreePartContainer>
                    <StyledGenerateTreeDetailsContainer>
                        <div>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                value={genHeight}
                                onChange={event => {
                                    putGenTreeHeight(Number(event.target.value))
                                }}
                            />
                            <span>height</span>
                        </div>
                        <div>
                            is BST (left child is smaller than current is
                            smaller than right child)? no
                        </div>
                        <div>node values: standard, randomized, 🐶</div>
                    </StyledGenerateTreeDetailsContainer>
                    <StyledGenerateTreeButtonContainer>
                        <StyledButton onClick={generateTree}>
                            Generate
                        </StyledButton>
                    </StyledGenerateTreeButtonContainer>
                </StyledGenerateTreePartContainer>
            </StyledPageSideCode>
        </StyledPageLayout>
    )
}
const ConnectTreeViz = connect(mapStateToProps, mapDispatchToProps)(TreeViz)
export default ConnectTreeViz

interface TreeProps {
    tree: Array<NodeModel[]>
    speed: number
}
const Tree: React.FunctionComponent<TreeProps> = ({ tree, speed }) => {
    const radius: number = 20
    const spacing: number = 10
    const position: number = radius + spacing / 2

    return (
        <>
            {tree.map((levelNodes, level) =>
                levelNodes.map((node, index) => {
                    const x =
                        Math.pow(2, tree.length - level) *
                        (index + 0.5) *
                        position
                    const y = 4 * (level + 1) * position

                    const xLeftChild =
                        Math.pow(2, tree.length - level - 1) *
                        (2 * index + 0.5) *
                        position
                    const xRightChild =
                        Math.pow(2, tree.length - level - 1) *
                        (2 * index + 0.5 + 1) *
                        position
                    const yChild = 4 * (level + 2) * position

                    const thetaLeft = Math.atan(
                        Math.abs(x - xLeftChild) / Math.abs(y - yChild)
                    )
                    const thetaRight = Math.atan(
                        Math.abs(x - xRightChild) / Math.abs(y - yChild)
                    )

                    const leftBranchXOffset = radius * Math.sin(thetaLeft)
                    const rightBranchXOffset = radius * Math.sin(thetaRight)
                    const leftBranchYOffset = radius * Math.cos(thetaLeft)
                    const rightBranchYOffset = radius * Math.cos(thetaRight)

                    return (
                        <Fragment key={node.id}>
                            <Node
                                x={x}
                                y={y}
                                level={level}
                                radius={radius}
                                node={node}
                                speed={speed}
                            />
                            {node.leftChild && (
                                <StyledNodeBranch
                                    x1={x - leftBranchXOffset}
                                    y1={y + leftBranchYOffset}
                                    x2={xLeftChild}
                                    y2={yChild}
                                />
                            )}
                            {node.rightChild && (
                                <StyledNodeBranch
                                    x1={x + rightBranchXOffset}
                                    y1={y + rightBranchYOffset}
                                    x2={xRightChild}
                                    y2={yChild}
                                />
                            )}
                        </Fragment>
                    )
                })
            )}
        </>
    )
}

interface NodeProps {
    x: number
    y: number
    level: number
    radius: number
    node: NodeModel
    speed: number
}
const Node: React.FunctionComponent<NodeProps> = ({
    x,
    y,
    radius,
    node,
    speed,
}) => {
    return (
        <g>
            <StyledNodeCircle
                cx={x}
                cy={y}
                r={radius}
                state={node.state}
                speed={speed}
            />
            <StyledNodeValue x={x} y={y} dy=".3em">
                {node.value}
            </StyledNodeValue>
        </g>
    )
}
