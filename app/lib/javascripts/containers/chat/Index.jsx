import React, { PropTypes, Component } from 'react'
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../../../stylesheets/containers/chat/top.css'

class Chat extends Component {

  render() {
    return (
      <div className={styles.index}>
        {
        //state中のオブジェクトをループさせて<li>要素を描画。stateは selector() メソッドで指定しているものがpropsとして渡ってくる
        this.props.state.storedDatas.map((obj) =>
          <div key={obj.id} className={styles.female}>
            <div  style={{display: "none"}}>
              <Avatar id="female" src={obj.image} className={styles.image}/><br />
              {obj.text}
            </div>
          </div>
        )
        }
        <div id="chat_area"></div>
      </div>
    )
  }
}

Chat.propTypes = {
}

export default Chat