import { ActionType } from 'typesafe-actions'
import * as treeVisualizerActions from './treeVisualizerActions'

type TreeVisualizerActions = ActionType<typeof treeVisualizerActions>

export type RootAction = TreeVisualizerActions
