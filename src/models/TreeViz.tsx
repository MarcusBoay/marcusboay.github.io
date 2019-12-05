const uuidv1 = require('uuid/v1')

export class NodeModel {
    // data
    id: string
    value: number
    leftChild?: NodeModel
    rightChild?: NodeModel
    // view
    isActive: boolean

    constructor(val: number) {
        this.id = uuidv1()
        this.value = val
        this.leftChild = undefined
        this.rightChild = undefined
        this.isActive = false
    }
}
