import { all, fork } from 'redux-saga/effects'
import treeVisualizerSaga from './treeVisualizerSaga'

export default function* rootSaga() {
    yield all([fork(treeVisualizerSaga)])
}
