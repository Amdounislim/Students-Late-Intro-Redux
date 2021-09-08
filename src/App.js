import React from "react"
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import Counter from './Components/Counter';
import { toggle } from "./Redux/actions/actionShow"

function App() {

  const dispatch = useDispatch()
  const show = useSelector(state => state.reducerShow.show)

  return (
    <div className="App">
      <h1>React Redux -- Workshop</h1>
      <button onClick={() => dispatch(toggle())}>show</button>
      {show ? <Counter /> : null}
      {/* {show && <Counter />} */}
    </div>
  );
}

export default App;
