# Dynamic redux

> With dynamic redux you can inject your reducers on the fly

## Install Requirements

```console

nikandlv@nikandlv.ir:~$ npm install redux react-redux redux-thunk

```
## Setup

Then simply copy `src` folder into your project where you want

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

#### Use `withDynamic` builder

using `withDynamic` builder you can easily access your `reducers` and `actions` in your components

```javascript
import withDynamic from './Data/withDynamic';

export default withDynamic(MyComponent)
                .injectAction('name', func)
                .injectReducer('CounterReducer')
                .build()
```

there are 2 main functions

`injectAction` which takes function name and the action and injects it into your component props

`injectReducer` which takes a reducer name and injcets it into your component props
