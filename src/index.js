import React from "react"
import ReactDOM from "react-dom"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import infos from './info/InfoReducer'
import App from './app/App'

import styles from './eyecatcher.css'

const store = createStore(infos)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('eyecatcher'))
/*
const Eyecatcher = () => {
  return <div className={styles.logoTitleBig}>Eyes Catcher!!!</div>;
};

ReactDOM.render(<Eyecatcher/>, document.getElementById("eyecatcher"));
*/
