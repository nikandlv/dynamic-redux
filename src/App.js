import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Data/Store'
import CounterReducer from './Data/Reducers/CounterReducer';
import { increaseBy, decreaseBy } from './Data/Actions/CounterActions'
import { connect } from 'react-redux'
import use from './Data/use';
Store.injectReducer('CounterReducer',CounterReducer)

class Application extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.counter}
          <br/>
          <div className="button-group">
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
          </div>
      </header>
    </div>
    )
  }
}

export default use(Application)
                .addAction(increaseBy,decreaseBy)
                .addReducer('CounterReducer')
                .build()