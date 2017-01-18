import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../../../stylesheets/containers/company/top.css'

class Company extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className={styles.index}>
        <h1>会社情報</h1>
        会社名：せっきー株式会社<br />
        所在地：千葉県<br />
        資本金：100万円<br />
        <Link to="company/detail">
          <RaisedButton
            label="詳細を見る"
            secondary={true}
          />
        </Link>
      </div>
    )
  }
}

Company.propTypes = {
}

export default Company