import {
    takeLatest,
    all,
    select,
    put,
    putResolve,
    delay,
    call,
} from 'redux-saga/effects'
import { getType, ActionType } from 'typesafe-actions'
import {
    updateTreeAction,
    putTreeAction,
    createRootNodeAction,
    putRootNodeAction,
    preOrderTraversalAction,
} from '../actions/treeVisualizerActions'
import { NodeModel } from '../../models/TreeViz'
import { getRootNodeFromState } from '../reducers/treeVisualizerReducer'

function* createRootNodeSaga(action: ActionType<typeof createRootNodeAction>) {
    try {
        const rootNode = action.payload
        yield putResolve(putRootNodeAction(rootNode))
        yield put(updateTreeAction())
    } catch (e) {
        console.warn('create root node saga: something went wrong!', e)
    }
}

function* updateTreeSaga() {
    try {
        const rootNode = yield select(getRootNodeFromState)

        let queue: NodeModel[] = []
        queue.push(rootNode)

        let nodesLevels: Array<NodeModel[]> = []
        while (queue.length > 0) {
            let levelSize = queue.length

            let curLevel: NodeModel[] = []
            while (levelSize > 0) {
                let curNode: NodeModel = queue.shift() as NodeModel

                curLevel.push(curNode)

                if (curNode!.leftChild) queue.push(curNode!.leftChild)
                if (curNode!.rightChild) queue.push(curNode!.rightChild)

                levelSize--
            }
            nodesLevels.push(curLevel)
        }

        yield put(putTreeAction([...nodesLevels]))
    } catch (e) {
        console.error('update tree saga: something went wrong!', e)
    }
}

function* preOrderTraversalSaga() {
    try {
        const rootNode = yield select(getRootNodeFromState)

        yield call(preOrderTraversalSagaHelper, rootNode)
    } catch (e) {
        console.error('preorder traversal saga: something went wrong!', e)
    }
}
function* preOrderTraversalSagaHelper(curNode: NodeModel): any {
    if (!curNode) return

    curNode.isActive = true
    curNode.hasVisited = true
    yield putResolve(updateTreeAction())
    yield delay(250)
    yield call(preOrderTraversalSagaHelper, curNode.leftChild!)
    yield call(preOrderTraversalSagaHelper, curNode.rightChild!)
    curNode.isActive = false
    yield putResolve(updateTreeAction())
    yield delay(250)
}

//TODO: in order, post order, level order

function* treeVisualizerSaga() {
    yield all([
        yield takeLatest(getType(createRootNodeAction), createRootNodeSaga),
        yield takeLatest(getType(updateTreeAction), updateTreeSaga),
        yield takeLatest(
            getType(preOrderTraversalAction),
            preOrderTraversalSaga
        ),
    ])
}
export default treeVisualizerSaga
