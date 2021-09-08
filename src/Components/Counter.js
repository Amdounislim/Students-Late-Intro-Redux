import React from 'react'
import {connect} from "react-redux"
import {increment, decrement} from "../Redux/actions/actionCounter"

const Counter = (props) => {
    return (
        <div>
            <h2>Counter</h2>
            <p>{props.counter}</p>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
            counter: state.reducerCounter.count
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         increment : ()=>dispatch(increment())
//     }
// }
// const mapDispatchToProps={
//     increment,
//     decrement
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Counter)
export default connect(mapStateToProps, {increment, decrement}) (Counter)
