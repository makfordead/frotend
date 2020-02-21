import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MenuItemLink } from "react-admin";
import {
  List,
  ListItem,
  Collapse,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingsIcon from "@material-ui/icons/Settings";

// custom menu starts
class Menu extends Component {
  menuList = [
    { name: "A", label: "Agents", icon: <SupervisorAccountIcon fontSize="small"/> },
    { name: "B", label: "Settings", icon: <SettingsIcon fontSize="small" /> },
    { name: "D", label: "Dashboard", icon: <DashboardIcon fontSize="small" /> }]
  constructor(props) {
    super(props);
    this.state = { openA: false, openB: false, openD: false };
  }
  render() {
    const { resources, onMenuClick } = this.props;
    return (
      <div>
        <List component="nav">
          {/* for menu D */}
          <div key={this.menuList[2].name}>
            <ListItem
              button
              onClick={() => {
                this.setState({ openD: !this.state.openD });
              }}
            >
              <ListItemIcon>{this.menuList[2].icon}</ListItemIcon>
              <ListItemText primary={this.menuList[2].label} />
              {this.state.openD ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openD} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {resources
                  .filter(x => x.options.menu === this.menuList[2].name)
                  .map((resource, i) => (
                    <MenuItemLink
                      key={"m" + i}
                      to={`/${resource.name}`}
                      primaryText={resource.options.label || resource.name}
          
                      leftIcon={
                        resource.options.icon
                          ? resource.options.icon
                          : undefined
                      }
                      onClick={onMenuClick}
                      className={this.props.classes.nested}
                    />
                  ))}
              </List>
            </Collapse>
          </div>
          {/* for menu A */}
          <div key={this.menuList[0].name}>
            <ListItem
              button
              onClick={() => {
                this.setState({ openA: !this.state.openA });
              }}
            >
              <ListItemIcon>{this.menuList[0].icon}</ListItemIcon>
              <ListItemText primary={this.menuList[0].label} />
              {this.state.openA ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openA} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {resources
                  .filter(x => x.options.menu === this.menuList[0].name)
                  .map((resource, i) => (
                    <MenuItemLink
                      key={"m" + i}
                      to={`/${resource.name}`}
                      primaryText={resource.options.label || resource.name}
                      leftIcon={
                        resource.options.icon
                          ? resource.options.icon
                          : undefined
                      }
                      onClick={onMenuClick}
                      className={this.props.classes.nested}
                    />
                  ))}
              </List>
            </Collapse>
          </div>
          {/* menu list 'B' */}
          <div key={this.menuList[1].name}>
            <ListItem
              button
              onClick={() => {
                this.setState({ openB: !this.state.openB });
              }}
            >
              <ListItemIcon>{this.menuList[1].icon}</ListItemIcon>
              <ListItemText primary={this.menuList[1].label} />
              {this.state.openB ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openB} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {resources
                  .filter(x => x.options.menu === this.menuList[1].name)
                  .map((resource, i) => (
                    <MenuItemLink
                      key={"n" + i}
                      to={`/${resource.name}`}
                      primaryText={resource.options.label || resource.name}
                      leftIcon={
                        resource.options.icon
                          ? resource.options.icon
                          : undefined
                      }
                      onClick={onMenuClick}
                      className={this.props.classes.nested}
                    />
                  ))}
              </List>
            </Collapse>
          </div>
        </List>
      </div>
    );
  }
}

export default withRouter(Menu);
