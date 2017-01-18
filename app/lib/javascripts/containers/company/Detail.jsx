import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../../../stylesheets/containers/company/top.css'

class CompanyDetail extends Component {

  render() {
    return (
      <div className={styles.index}>
        <h1>会社情報詳細</h1>
        会社名：せっきー株式会社<br />
        所在地：千葉県<br />
        資本金：100万円<br />
        従業員数：2人と2匹<br />
        代表取締役：関山 秀光<br />
        代表猫世話係：関山 有希子<br />
        <Link to="company">
          <RaisedButton
            label="戻る"
            primary={true}
          />
        </Link>
      </div>
    )
  }
}

CompanyDetail.propTypes = {
}

export default CompanyDetail