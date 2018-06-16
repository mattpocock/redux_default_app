import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT } from '../../store/actions';

const App = ({ dispatch, amount }) => (
    <div>
        <h1>Hello World</h1>
        <button onClick={() => dispatch(INCREMENT(2))}>+</button>
        <p>{amount}</p>
    </div>
);

module.exports = connect(
    state => state.counterReducer,
)(App);
