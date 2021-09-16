import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellWatch } from '../redux/actions/actions';

const WatchComp = () => {
    const dispatch = useDispatch();
    const numberofWatches = useSelector((state) => state.watch.numberOfWatches)
    const [number, setNumber] = useState(1)
    return (
        <div className="container">
            <h2>Watches --Hooks Example-- </h2>
            <h3>Number of Watches : <span className="number">{numberofWatches}</span></h3>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => dispatch(sellWatch(number))}>Sell Watch</button>
        </div>
    )
}

export default WatchComp
