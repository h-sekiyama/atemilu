import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import styles from '../../stylesheets/containers/home/top.css'

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <AppBar
          title="Atemilu"
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="絞り込む" />
              <MenuItem primaryText="設定" />
              <MenuItem primaryText="ログアウト" />
            </IconMenu>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
