/* ライブラリのインポート */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider }  from 'react-redux'
import configureStore from './store/configureStore'

/* Appコンポーネントのインポート */
import App from './containers/App'
import Home from './containers/home/Home'
/* Reducerから Store をインポート */
const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

let rootElement = document.querySelector('#root');

render (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  // rootElement下にコンポーネントを生成
  rootElement
);
