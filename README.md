# Dynamic redux

> With dynamic redux you can inject your reducers on the fly

## Installation

```console

nikandlv@nikandlv.ir:~$ npm install redux react-redux redux-thunk

```

Then simply copy `Data` folder into your project

## Setup

### Import it

```javascript
import ReduxProvider from './Data/ReduxProvider'
```

### Wrap your root component or any base component

```javascript
ReactDOM.render(
    <ReduxProvider>
        <Application />
    </ReduxProvider>, document.getElementById('root'));
```

## Injecting a reducer

### Import the store and a reducer

```javascript
import CounterReducer from './Data/Reducers/CounterReducer'
import Store from './Data/Store'
```

### Inject your reducer

```javascript
Store.injectReducer('CounterReducer',CounterReducer)
```

`injectReducer` takes two parameters a `key` and the `reducer`

#### Use `with` builder

using `with` builder you can easily access your `reducers` and `actions` in your component