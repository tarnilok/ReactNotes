import React from 'react';
import { connect } from 'react-redux';
import { sellComp } from '../redux/actions/actions';

const CompComp = (props) => {
    const [number, setNumber] = React.useState(1)
    console.log("compprops", props)

    return (
        <div className="container">
            <h2>Computer --Pure Redux--</h2>
            <h3>Number of Computers : <span className="number">{props.numberOfComps}</span></h3>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.sellComp(number)}>Sell Computer</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfComps : state.comp.numberOfComps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sellComp : number => dispatch(sellComp(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompComp);
