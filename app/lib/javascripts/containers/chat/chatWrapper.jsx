import React, { PropTypes, Component } from 'react'
import styles from '../../../stylesheets/containers/chat/top.css'
import { connect } from 'react-redux'
import Index from './Index';

class ChatWrapper extends Component {

  render() {
    return (
      <div>
        <Index state={this.props.state} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  }
}

ChatWrapper.propTypes = {
  children: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps
)(ChatWrapper)