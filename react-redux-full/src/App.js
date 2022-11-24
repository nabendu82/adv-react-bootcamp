// import { Provider } from 'react-redux';
import React, { useReducer } from 'react';
import './App.css';
import GrandParent from './components/GrandParent';
// import EggContainer from './components/EggContainer';
// import HookChickenContainer from './components/HookChickenContainer';
// import HookEggContainer from './components/HookEggContainer';
// import UserContainer from './components/UserContainer';
// import store from './redux/store';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <Provider store={store}>
        <EggContainer />
        <HookEggContainer />
        <HookChickenContainer />
        <UserContainer />
      </Provider> */}
      <CountContext.Provider value={{ count, dispatch }}>
        <GrandParent />
      </CountContext.Provider>
    </div>
  );
}

export default App;
