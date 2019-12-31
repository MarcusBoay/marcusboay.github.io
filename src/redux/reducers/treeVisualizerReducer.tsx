import { combineReducers } from 'redux'
import { RootAction } from '../actions'
import { NodeModel, GenNodeValueType } from '../../models/TreeViz'
import { getType } from 'typesafe-actions'
import {
    putTreeAction,
    putRootNodeAction,
    updateExecutionSpeedAction,
    putGenHeightAction,
    putGenIsBSTreeAction,
    putGenIsCompleteTreeAction,
    putGenIsFullTreeAction,
    putGenNodeValueTypeAction,
} from '../actions/treeVisualizerActions'
import { RootState } from '.'

export type TreeVisualizerState = {
    rootNode: NodeModel
    tree: Array<NodeModel[]>
    executionSpeed: number
    genHeight: number
    genIsBSTree: boolean
    genIsCompleteTree: boolean
    genIsFullTree: boolean
    genNodeValueType: GenNodeValueType
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
    genHeight: (state: number = 4, action) => {
        switch (action.type) {
            case getType(putGenHeightAction):
                return action.payload
            default:
                return state
        }
    },
    genIsBSTree: (state: boolean = false, action) => {
        switch (action.type) {
            case getType(putGenIsBSTreeAction):
                return action.payload
            default:
                return state
        }
    },
    genIsCompleteTree: (state: boolean = false, action) => {
        switch (action.type) {
            case getType(putGenIsCompleteTreeAction):
                return action.payload
            default:
                return state
        }
    },
    genIsFullTree: (state: boolean = false, action) => {
        switch (action.type) {
            case getType(putGenIsFullTreeAction):
                return action.payload
            default:
                return state
        }
    },
    genNodeValueType: (
        state: GenNodeValueType = GenNodeValueType.STANDARD,
        action
    ) => {
        switch (action.type) {
            case getType(putGenNodeValueTypeAction):
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

export const getGenHeightFromState = (state: RootState): number => {
    return state.treeVisualizer.genHeight
}

export const getGenIsBSTreeFromState = (state: RootState): boolean => {
    return state.treeVisualizer.genIsBSTree
}

export const getGenIsCompleteTreefromState = (state: RootState): boolean => {
    return state.treeVisualizer.genIsCompleteTree
}

export const getGenIsFullTreeFromState = (state: RootState): boolean => {
    return state.treeVisualizer.genIsFullTree
}

export const getGenNodeValueTypeFromState = (
    state: RootState
): GenNodeValueType => {
    return state.treeVisualizer.genNodeValueType
}
