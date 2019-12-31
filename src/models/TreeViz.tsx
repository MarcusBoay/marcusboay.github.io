const uuidv1 = require('uuid/v1')

export enum NodeState {
    INIT,
    VISITING,
    WAITING,
    VISITED,
}

export class NodeModel {
    // data
    id: string
    value: any
    leftChild?: NodeModel
    rightChild?: NodeModel
    // view
    state: NodeState

    constructor(val: any) {
        this.id = uuidv1()
        this.value = val
        this.leftChild = undefined
        this.rightChild = undefined
        this.state = NodeState.INIT
    }
}

export enum GenNodeValueType {
    STANDARD,
    RANDOM,
    EMOJI,
}
