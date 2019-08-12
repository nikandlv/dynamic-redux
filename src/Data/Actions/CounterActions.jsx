import * as types from './types'

export const increaseBy = (number) => (dispatch) => {
    dispatch({
        type:types.INCREASE_BY,
        payload: number
    })
}
