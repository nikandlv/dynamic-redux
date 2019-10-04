import {connect} from 'react-redux'

let reducer_list = []

let action_list = []

let component = null

const builder = {
    injectAction: (key,action) => {
        action_list[key] = action
        return builder
    },
    injectReducer: (reducer) => {
        reducer_list = [...reducer_list,reducer]
        return builder
    },
    build: () => {
        if(component === null) {
            console.error('Component should not be null')
        }
        let reducers = reducer_list
        let actions = action_list
        let cmp = component
        reducer_list = []
        action_list = []
        component = null
        return connect(() => (state) => {
            let result = {}
            Object.keys(state).map((key) => {
                if(reducers.includes(key)) {
                    result[key] = (state[key])
                }
            })
            return result
        },actions)(cmp)
    }
}

export default function withDynamic(input) {
    component = input
    return builder
}
