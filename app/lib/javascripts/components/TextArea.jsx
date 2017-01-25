import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from '../../stylesheets/containers/chat/top.css'

class TextArea extends Component {
  render() {
    return (
        <div className={styles.text}>
          <TextField hintText="何か発言してみよう！" onKeyDown={(e) => this.onChatSend(e)} id="chat" />
        </div>
    );
  }

  onChatSend(e) {
    if(e.keyCode == 13 && $('#chat').val() != '') {
      const { chatSend } = this.props;
      this.props.chatSend($('#chat').val(), this.props.state.storedDatas[0].appUserId);
    }
  }
}

TextArea.propTypes = {
  chatSend: PropTypes.func.isRequired,
};

export default TextArea;
