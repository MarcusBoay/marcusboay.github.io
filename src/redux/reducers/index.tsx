import { combineReducers } from 'redux'
import { RootAction } from '../actions'
import {
    treeVisualizerReducer,
    TreeVisualizerState,
} from './treeVisualizerReducer'

export interface RootState {
    readonly treeVisualizer: TreeVisualizerState
}

export const RootReducer = combineReducers<RootState, RootAction>({
    treeVisualizer: treeVisualizerReducer,
})
