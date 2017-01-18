import React, { PropTypes, Component } from 'react'
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
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
          <div key={obj.id} className={styles.female}>
            <Avatar src={obj.image} className={styles.image} /><br />
            {obj.text}
          </div>
        )
        }
        <div className={styles.text}>
          <TextField hintText="何か発言してみよう！" onKeyDown={(e) => this.onChatSend(e)} />
        </div>
      </div>
    )
  }

  onChatSend(e) {
    if(e.keyCode == 13) {
      console.log('エンター押した！');
    }
  }
}

Chat.propTypes = {
  chatSend: PropTypes.func.isRequired,
}

export default Chat