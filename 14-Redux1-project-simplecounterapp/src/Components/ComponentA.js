import React from 'react'
import "../App.css"
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, reset } from '../redux/actions'

const ComponentA = () => {
    const myCounter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div className="App" style = {{backgroundColor:"yellow", height: "35vh"}}>
            <h2>ComponentA</h2>
            <h2>Count: {myCounter}</h2>
            <button onClick={() => dispatch(increase(5))}>Increase</button>
            <button onClick={() => dispatch(decrease(5))}>Decrease</button>
            <button onClick={() => dispatch(reset(100))}>Reset</button>
        </div>
    )
}

export default ComponentA
