import React from "react";

import { Sidebar, Menu, Segment, Icon } from "semantic-ui-react";

const SideNav = (props) => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={props.hide}
        visible={props.visible}
        width="thin"
      >
          <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='calendar alternate' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='trophy' />
              Tips
            </Menu.Item>
      </Sidebar>
    </Sidebar.Pushable>
  );
};


export default SideNav;
