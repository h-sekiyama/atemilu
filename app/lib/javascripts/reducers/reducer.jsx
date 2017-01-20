import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/*
  Reducer:
  ReducerはAction Creatorから渡されたデータに変更をもとに新しい state を返す。
  stateは Reducer が返した新しい state に更新され、View (Appコンポーネント) が新しい state を元に再描画される。
*/

var appUserId = null;

// アプリ起動時のstate
let initialState = [
  {
    id: 0,
    text: '女性0',
    image: './images/female0.jpg',
    good: 0,
    bad: 0,
    appUserId: null
  }
]

//Repl-AIのユーザーID取得処理
$.ajax({
  type: 'POST',
  dataType: 'json',
  url: 'https://api.repl-ai.jp/v1/registration',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'qvPuV0ukTq8XdPbLyPh7X5TA4k99KB3W1dOfO11b'
  },
  data: JSON.stringify({
    botId: 'nekoneko'
  }),
  success: function(data) {
    appUserId = data.appUserId;
  }
});

function returnFemaleData(state = initialState, action) {
  switch(action.type) {
    case 'CLICK':
      //ADD_TEXTアクションが来た時は現状の state に新しく生成されるオブジェクトをプラスして state を返す
      return [
        // Spread Operatorで現状の state を全て要素として配列の中に展開する: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator
        {
          id: action.id,
          text: action.text,
          image: action.image,
          good: action.sumData.good,
          bad: action.sumData.bad
        }
        //下記はADD_TEXTアクションによって新たに state に追加されるオブジェクト
        // {
        //   id: action.id,
        //   text: action.text
        // }
      ];
    case 'CHAT':
      return [
        // Spread Operatorで現状の state を全て要素として配列の中に展開する: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator
        {
          id: action.id,
          text: action.text,
          image: action.image,
          appUserId: appUserId
        }];
    default:
      return state
  }
};

const rootReducer = combineReducers(
  {
    storedDatas : returnFemaleData,
    routing: routerReducer,
  }
)

export default rootReducer;