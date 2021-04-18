import React, { useState } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        {props.menuItems
          ? props.menuItems.map((item, index) => {
              return (
                <Menu.Item
                  as={Link}
                  to={item.link}
                  name={item.name}
                  active={activeItem === item.name}
                  onClick={handleItemClick}
                />
              );
            })
          : null}
        <Menu.Menu position="right">
          <Menu.Item>
            <Button inverted>{props.team}</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Navbar;
