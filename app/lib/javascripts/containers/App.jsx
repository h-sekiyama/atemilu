/* ライブラリのインポート */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Main from '../components/Main';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import Footer from '../components/Footer';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from '../../stylesheets/containers/home/top.css'
import '../../stylesheets/sanitize.css'
import '../../stylesheets/base.css'

/* Action Creatorのインポート */
import * as nextFemale from '../actions/actions'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/*
  View (Reactコンポーネント):
  ユーザーの操作などを受けて dispatch() メソッドで Action Creator (./actions.jsからインポートした addText(), clearText()メソッドなど) を呼び出して、Storeにデータの変更 (stateの変更) を伝播させる
  dispatch() メソッドは connect() メソッド (react-reduxよりインポート) でラップすることにより使用可能になる
  例: this.props.dispatch(clearText())
*/

class App extends Component {

  render() {
    const { actions } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()} className="s-home">
        <div className={styles.info_area}>
          <Header />
          <Main state={this.props.state} />
          <Buttons nextFemale={actions.nextFemale} />
          <Footer />
        </div>
      </MuiThemeProvider>
    )

  }
}

// セレクターの定義: Appコンポーネントが必要とするデータを state 全体の中から取捨選択して取得する。今回は state 全体をそのままreturnしている
let selector = (state) => {
  // [storedDatas]というキー名はreducer.jsの最下部で設定している Store のキー名。
  console.log(state.storedDatas);
  return {
    state: state // Key名とvalue名が同じなので return {state} でも可: Object Literal Shorthand
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nextFemale, dispatch)
  };
}

// Appコンポーネントを connect() メソッドでラップした上でエクスポート
export default connect(
  selector,
  mapDispatchToProps
)(App)