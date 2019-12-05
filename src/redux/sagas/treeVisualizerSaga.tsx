import { takeLatest, all, select, put, putResolve } from 'redux-saga/effects'
import { getType, ActionType } from 'typesafe-actions'
import {
    updateTreeAction,
    putTreeAction,
    createRootNodeAction,
    putRootNodeAction,
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

function* treeVisualizerSaga() {
    yield all([
        yield takeLatest(getType(createRootNodeAction), createRootNodeSaga),
        yield takeLatest(getType(updateTreeAction), updateTreeSaga),
    ])
}
export default treeVisualizerSaga
