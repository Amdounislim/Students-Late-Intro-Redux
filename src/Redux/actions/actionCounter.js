import {DECREMENT, INCREMENT} from "../constants/actionsTypes"

export const increment=()=>{
    return{
        type: INCREMENT
    }
}
export const decrement=()=>{
    return{
        type: DECREMENT
    }
}

