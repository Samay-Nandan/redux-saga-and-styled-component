import React from 'react'
import ReactDOM from 'react-dom'
import UserList from './container/usersList'
import { Provider } from "react-redux"
import { store } from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

