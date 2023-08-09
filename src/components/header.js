import React from 'react';
import { DatePicker, TimePicker, Button, Switch, Typography } from 'antd';
import { GlobalOutlined, BulbOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'antd/dist/reset.css';
import './style.css';
import Accordions from './accordion';
import Tables from './tables';
import ProjectStatus from './ProjectStatus';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div className="container">
        <div className={`header-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <header className="header-section">
            <div className="date-time-section">
              <DatePicker defaultValue={moment()} />
              <TimePicker defaultValue={moment()} format="HH:mm" />
            </div>
            <div className="title-section">
              <Typography.Title level={1} className="animated-title">
                Projects <span className="highlight">Demo</span> Page
              </Typography.Title>
            </div>
            <div className="button-section">
              <Button icon={<GlobalOutlined />}>TR | EN</Button>
              <Switch
                checkedChildren={<BulbOutlined />}
                unCheckedChildren={<BulbOutlined />}
                checked={darkMode}
                onChange={this.toggleTheme}
              />
            </div>


          </header>
          <Accordions />
          <Tables />
          <ProjectStatus />
        </div>
      </div>
    );
  }
}

export default Header;
