import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Data/Store'
import CounterReducer from './Data/Reducers/CounterReducer';
import { increaseBy, decreaseBy } from './Data/Actions/CounterActions'
import withDynamic from './Data/withDynamic';
Store.injectReducer('CounterReducer',CounterReducer)

class Application extends React.Component {
  render() {
    console.log(this.props)
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

export default withDynamic(Application)
                .injectAction('increaseBy',increaseBy)
                .injectAction('decreaseBy',decreaseBy)
                .injectReducer('CounterReducer')
                .build()
