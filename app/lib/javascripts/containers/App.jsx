/* ライブラリのインポート */
import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from '../../stylesheets/containers/home/top.css'
import '../../stylesheets/sanitize.css'
import '../../stylesheets/base.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/*
  View (Reactコンポーネント):
  ユーザーの操作などを受けて dispatch() メソッドで Action Creator (./actions.jsからインポートした addText(), clearText()メソッドなど) を呼び出して、Storeにデータの変更 (stateの変更) を伝播させる
  dispatch() メソッドは connect() メソッド (react-reduxよりインポート) でラップすることにより使用可能になる
  例: this.props.dispatch(clearText())
*/

class App extends Component {
  shouldComponentUpdate() {
    // 全体的なfilter処理はここでやる
    return true
  }

  getGlobalClass(pathname) {
    if (pathname === '/') {
      return 'scene_dashboard'
    }
    const names = pathname.split('/')
    let sceneName = ''
    names.forEach((name, idx) => {
      if (!!name) {
        sceneName += name
        if (idx < names.length - 1) {
          sceneName += '_'
        }
      }
    })
    return `scene_${sceneName}`
  }

  render() {
    const { children, location } = this.props;
    const sceneName = this.getGlobalClass(location.pathname)
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()} className="s-home">
        <div className={styles.info_area}>
          <Header />
          {children}
          <Footer />
        </div>
      </MuiThemeProvider>
    )

  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default App