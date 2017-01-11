import React, { PropTypes, Component } from 'react';
import { RaisedButton } from 'material-ui';
import styles from '../../stylesheets/containers/home/top.css'

const style = {
  margin: 12,
};

class Buttons extends Component {
  render() {
    return (
      <div className={styles.buttons}>
        <RaisedButton
          className="clear-completed"
          onClick={(e) => this.onGoodBtnClicked(e)}
          primary={true}
          style={style}
          label="いいね！" />
        <RaisedButton
          className="clear-completed"
          onClick={(e) => this.onBadBtnClicked(e)}
          secondary={true}
          style={style}
          label="いまいち…" />
      </div>
    );
  }

  //「いいね！」ボタンをクリックした時に呼び出される
  onGoodBtnClicked(e) {
    const { nextFemale } = this.props;
    // let input = this.refs.input
    // let text = input.value.trim()
    // if (!text) return alert('何かテキストを入力してください。')
    // input.value = ''
    // // Appコンポーネントが connect() メソッドでラップされていることによって、dispatchメソッドを呼び出すことが可能になる
    // // dispatch() メソッドで ActionCreator である addText() メソッドをラップして呼び出すことによって state の変更を伝播
    this.props.nextFemale('good')
  }

  //「いまいち…」ボタンをクリックした時に呼び出される
  onBadBtnClicked(e) {
    // dispatchメソッドで ActionCreator であるclearText() メソッドをラップして呼び出すことによって state の変更を伝播
    this.props.nextFemale('bad')
  }
}

Buttons.propTypes = {
  nextFemale: PropTypes.func.isRequired
};

export default Buttons;
