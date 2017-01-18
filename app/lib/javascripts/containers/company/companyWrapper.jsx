import React, { PropTypes, Component } from 'react'
import styles from '../../../stylesheets/containers/company/top.css'

class CompanyWrapper extends Component {

  render() {
    return (
      <div className={styles.index}>
        { this.props.children }
      </div>
    )
  }
}

CompanyWrapper.propTypes = {
  children: PropTypes.object.isRequired,
}

export default CompanyWrapper
