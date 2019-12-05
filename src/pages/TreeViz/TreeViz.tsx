import React, { useEffect, useState } from 'react'
import {
    StyledPageLayout,
    StyledPageSideTree,
    StyledPageSideCode,
    StyledNodeCircle,
    StyledNodeValue,
    StyledNodeBranch,
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
    preOrderTraversalAction,
} from '../../redux/actions/treeVisualizerActions'
import { connect } from 'react-redux'

/**
 * TODO:
 * - generate trees :
 * 	- dropdown (binary tree, complete, incomplete, depth, how many nodes)
 * 	- user clicking near node
 *
 * - user can pick what algo to run from dropdown (v1, no interaction with code, BFS, DFS, pre-order, post-order, in-order)
 *
 * - highlight line of code that is being executed and show it on tree
 *
 * - adding nodes, updating nodes, deleting nodes (by user)
 *
 * - dropdown of algo
 *
 * - line between parent and child node
 *
 * - visual sexiness
 */

interface TreeVizProps {
    rootNode: NodeModel
    tree: Array<NodeModel[]>
    createRootNode: (node: NodeModel) => void
    preOrderTraversal: () => void
}

const mapStateToProps = (state: RootState) => ({
    rootNode: getRootNodeFromState(state),
    tree: getTreeFromState(state),
})
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
    bindActionCreators(
        {
            createRootNode: createRootNodeAction,
            preOrderTraversal: preOrderTraversalAction,
        },
        dispatch
    )

const TreeViz: React.FunctionComponent<TreeVizProps> = ({
    rootNode,
    tree,
    createRootNode,
    preOrderTraversal,
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
                <button
                    onClick={() => {
                        preOrderTraversal()
                    }}
                >
                    do dfs
                </button>
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

    return (
        <>
            {tree.map((levelNodes, level) =>
                levelNodes.map((node, index) => {
                    const x =
                        Math.pow(2, tree.length - level) *
                        (index + 0.5) *
                        position
                    const y = 4 * (level + 1) * position

                    //need to fix index value, geometry math
                    const xLeftChild =
                        Math.pow(2, tree.length - level - 1) *
                        (2 * index + 0.5) *
                        position
                    //need to fix index value, geometry math
                    const xRightChild =
                        Math.pow(2, tree.length - level - 1) *
                        (2 * index + 0.5 + 1) *
                        position
                    const yChild = 4 * (level + 2) * position

                    return (
                        <>
                            <Node
                                key={String(level) + '.' + String(node.value)}
                                x={x}
                                y={y}
                                level={level}
                                radius={radius}
                                node={node}
                            />
                            {node.leftChild && (
                                <StyledNodeBranch
                                    x1={x - radius}
                                    y1={y + radius}
                                    x2={xLeftChild + radius}
                                    y2={yChild - radius}
                                />
                            )}
                            {node.rightChild && (
                                <StyledNodeBranch
                                    x1={x + radius}
                                    y1={y + radius}
                                    x2={xRightChild - radius}
                                    y2={yChild - radius}
                                />
                            )}
                        </>
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
}
const Node: React.FunctionComponent<NodeProps> = ({ x, y, radius, node }) => {
    return (
        <g>
            <StyledNodeCircle
                cx={x}
                cy={y}
                r={radius}
                isActive={node.isActive}
                hasVisited={node.hasVisited}
            />
            <StyledNodeValue x={x} y={y} dy=".3em">
                {node.value}
            </StyledNodeValue>
        </g>
    )
}
