import React, { PropTypes, Component } from 'react'
import styles from '../../../stylesheets/containers/chat/top.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Index from './Index';
import TextArea from '../../components/TextArea'

/* Action Creatorのインポート */
import * as chatSend from '../../actions/actions'

class ChatWrapper extends Component {

  render() {
    return (
      <div>
        <Index state={this.props.state} />
        <TextArea chatSend={this.props.actions.chatSend} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatSend, dispatch)
  };
}

ChatWrapper.propTypes = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWrapper)