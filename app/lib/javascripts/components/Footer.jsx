import React, { PropTypes, Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Email from 'material-ui/svg-icons/communication/email';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import styles from '../../stylesheets/containers/home/top.css'

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Tabs>
          <Tab
            icon={<Search />}
          />
          <Tab
            icon={<Favorite />}
          />
          <Tab
            icon={<Email />}
          />
          <Tab
            icon={<AccountCircle />}
          />
        </Tabs>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
