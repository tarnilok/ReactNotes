import React from 'react'
import { useSelector } from 'react-redux'
import "../App.css"

const ComponentB = () => {
    const myCounter = useSelector(state => state.counter)

    return (
        <div className="App" style = {{backgroundColor:"green", height: "35vh"}}>
            <h2>ComponentB</h2>
            <h2>Count: {myCounter}</h2>
        </div>
    )
}

export default ComponentB;
