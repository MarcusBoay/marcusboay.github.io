import { createAction } from 'typesafe-actions'
import { NodeModel } from '../../models/TreeViz'

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

// Traversal
export const preOrderTraversalAction = createAction('PRE_ORDER_TRAVERSAL')

export const inOrderTraversalAction = createAction('IN_ORDER_TRAVERSAL')

export const postOrderTraversalAction = createAction('POST_ORDER_TRAVERSAL')

export const levelOrderTraversalAction = createAction('LEVEL_ORDER_TRAVERSAL')

export const resetNodesAction = createAction('RESET_NODES')
