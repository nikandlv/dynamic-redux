import Store from './Store';
import {connect} from 'react-redux'

let reducer_list = []

let action_list = []

let component = null

const builder = {
    addAction: (...actions) => {
        action_list = [...action_list,...actions]
        return builder
    },
    addReducer: (reducers) => {
        reducer_list = [...reducer_list,...reducers]
        return builder
    },
    build: () => {
        if(component === null) {
            console.error('Component should not be null')
        }
        return connect((state) => {
            return Object.keys(state).filter((key) => reducer_list.includes(key) )
        },action_list)(component)
    }
}

export default function withDynamic(input) {
    component = input
    return builder
}