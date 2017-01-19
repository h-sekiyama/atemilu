import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Main from '../../components/Main';
import Buttons from '../../components/Buttons';
import styles from '../../../stylesheets/containers/home/top.css'

/* Action Creatorのインポート */
import * as nextFemale from '../../actions/favorite'
import * as chatWithFemale from '../../actions/favorite'

class Home extends Component {

  render() {
    return (
      <div>
          <Main state={this.props.state} />
          <Buttons nextFemale={this.props.actions.nextFemale} chatWithFemale={this.props.actions.chatWithFemale} />
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
    actions: bindActionCreators(Object.assign({}, nextFemale, { replace: chatWithFemale.replace }), dispatch)
  };
}

Home.propTypes = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)