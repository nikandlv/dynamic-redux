import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxProvider from './Data/ReduxProvider'
import Store from './Data/Store'
import CounterReducer from './Data/Reducers/CounterReducer';
import { increaseBy, decreaseBy } from './Data/Actions/CounterActions'
import { connect } from 'react-redux'
Store.injectReducer('CounterReducer',CounterReducer)

class Application extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.counter}
          <br/>
          <button onClick={() => {
            this.props.increaseBy(1)
          }}>
            increase
          </button>
          <button onClick={() => {
            this.props.decreaseBy(1)
          }}>
            decrease
          </button>
      </header>
    </div>
    )
  }
}

const mapStateToProps = state => ({ 
    ...state.CounterReducer
})

const actions = {
  increaseBy,
  decreaseBy
}

const ApplicationWithRedux = connect(mapStateToProps, actions)(Application)

export default function Wrapper() {
  return (
    <ReduxProvider>
      <ApplicationWithRedux />
    </ReduxProvider>
  );
}
