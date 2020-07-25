import React, { Component } from 'react';
import css from './Counter.module.css';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/counterActions';

class Counter extends Component {

    render() {
        const { state, increment, decrement } = this.props;

        return (
            <div className={css.wrapper}>
                <h2>Counter</h2>
                <div className={css.boxBtn}>
                    <button onClick={decrement} className={css.btn}>-</button>
                    <span className={css.number}>{state}</span>
                    <button onClick={increment} className={css.btn}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.counter
    }
}

const mapDispatchToProps = (dispatch) => ({
    increment: counter => {
        return dispatch(increment(1))
    },
    decrement: counter => {
        return dispatch(decrement(1))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);