import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxProvider from './Data/ReduxProvider'
import Store from './Data/Store'
import CounterReducer from './Data/Reducers/CounterReducer';
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.counter}
        </a>
      </header>
    </div>
    )
  }
}

const mapStateToProps = state => ({ 
    ...state.CounterReducer
})
const ApplicationWithRedux = connect(mapStateToProps, {})(Application)

export default function Wrapper() {
  return (
    <ReduxProvider>
      <ApplicationWithRedux />
    </ReduxProvider>
  );
}
