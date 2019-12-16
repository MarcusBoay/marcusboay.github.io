import { combineReducers } from 'redux'
import { RootAction } from '../actions'
import { NodeModel } from '../../models/TreeViz'
import { getType } from 'typesafe-actions'
import {
    putTreeAction,
    putRootNodeAction,
    updateExecutionSpeedAction,
} from '../actions/treeVisualizerActions'
import { RootState } from '.'

export type TreeVisualizerState = {
    rootNode: NodeModel
    tree: Array<NodeModel[]>
    executionSpeed: number
}
export const treeVisualizerReducer = combineReducers<
    TreeVisualizerState,
    RootAction
>({
    rootNode: (state: NodeModel = new NodeModel(0), action) => {
        switch (action.type) {
            case getType(putRootNodeAction):
                return action.payload
            default:
                return state
        }
    },
    tree: (state: Array<NodeModel[]> = [], action) => {
        switch (action.type) {
            case getType(putTreeAction):
                return action.payload
            default:
                return state
        }
    },
    executionSpeed: (state: number = 50, action) => {
        switch (action.type) {
            case getType(updateExecutionSpeedAction):
                return action.payload
            default:
                return state
        }
    },
})

export const getRootNodeFromState = (state: RootState): NodeModel => {
    return state.treeVisualizer.rootNode
}

export const getTreeFromState = (state: RootState): Array<NodeModel[]> => {
    return state.treeVisualizer.tree
}

export const getExecutionSpeedFromState = (state: RootState): number => {
    return state.treeVisualizer.executionSpeed
}
