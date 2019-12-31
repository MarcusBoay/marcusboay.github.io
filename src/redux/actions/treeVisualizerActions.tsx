import { createAction } from 'typesafe-actions'
import { NodeModel, GenNodeValueType } from '../../models/TreeViz'

// Create, Update, Delete
export const createNodeAction = createAction(
    'CREATE_NODE',
    resolve => (nodeId: String) => resolve(nodeId)
)

export const updateNodeAction = createAction(
    'UPDATE_NODE',
    resolve => (nodeId: String) => resolve(nodeId)
)

export const deleteNodeAction = createAction(
    'DELETE_NODE',
    resolve => (nodeId: String) => resolve(nodeId)
)

export const createRootNodeAction = createAction(
    'CREATE_ROOT_NODE',
    resolve => (node: NodeModel) => resolve(node)
)

export const putRootNodeAction = createAction(
    'PUT_ROOT_NODE',
    resolve => (node: NodeModel) => resolve(node)
)

export const updateTreeAction = createAction('UPDATE_TREE')

export const putTreeAction = createAction(
    'PUT_TREE',
    resolve => (tree: Array<NodeModel[]>) => resolve(tree)
)

// Generation
export const generateTreeAction = createAction('GENERATE_TREE')

export const putGenHeightAction = createAction(
    'PUT_GEN_HEIGHT',
    resolve => (genHeight: number) => resolve(genHeight)
)

export const putGenIsBSTreeAction = createAction(
    'PUT_GEN_IS_BS_TREE',
    resolve => (genIsBSTree: boolean) => resolve(genIsBSTree)
)

export const putGenIsCompleteTreeAction = createAction(
    'PUT_GEN_IS_COMPLETE_TREE',
    resolve => (genIsCompleteTree: boolean) => resolve(genIsCompleteTree)
)

export const putGenIsFullTreeAction = createAction(
    'PUT_GEN_IS_FULL_TREE',
    resolve => (genIsFullTree: boolean) => resolve(genIsFullTree)
)

export const putGenNodeValueTypeAction = createAction(
    'PUT_GEN_NODE_VALUE_TYPE',
    resolve => (valueType: GenNodeValueType) => resolve(valueType)
)

// Traversal
export const preOrderTraversalAction = createAction('PRE_ORDER_TRAVERSAL')

export const inOrderTraversalAction = createAction('IN_ORDER_TRAVERSAL')

export const postOrderTraversalAction = createAction('POST_ORDER_TRAVERSAL')

export const levelOrderTraversalAction = createAction('LEVEL_ORDER_TRAVERSAL')

export const resetNodesAction = createAction('RESET_NODES')

// Traversal Settings
export const updateExecutionSpeedAction = createAction(
    'UPDATE_EXECUTION_SPEED',
    resolve => (speed: number) => resolve(speed)
)
