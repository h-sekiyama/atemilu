import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../../../stylesheets/containers/chat/top.css'

class Chat extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className={styles.index}>
        {
        //state中のオブジェクトをループさせて<li>要素を描画。stateは selector() メソッドで指定しているものがpropsとして渡ってくる
        this.props.state.storedDatas.map((obj) =>
          <div key={obj.id}>
            <img src={obj.image} className={styles.image} /><br />
            {obj.text}
          </div>
        )
        }
      </div>
    )
  }
}

Chat.propTypes = {
}

export default Chat