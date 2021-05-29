import React, { useState } from "react";
import { Image, Menu, Segment, Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

const Navbar = (props) => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const teamLogo = useSelector(state => state.team.teamCrest);

  const teamName = useSelector(state => state.team.teamName);

  return (
    <Container fluid>
    <Segment inverted>
      <Menu inverted pointing secondary>
        {props.menuItems
          ? props.menuItems.map((item, index) => {
              return (
                <Menu.Item
                  as={Link}
                  to={item.link}
                  name={item.name}
                  key={item.key}
                  active={activeItem === item.name}
                  onClick={handleItemClick}
                />
              );
            })
          : null}
        <Menu.Menu position="right">
          <Menu.Item>
            <Button basic color='grey'>
            <Link to='/' style={{color: "white"}}>
              <Image src={`${process.env.REACT_APP_IMAGE_BASE_URL + teamLogo}`} avatar/>
               {teamName}
               </Link>
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
    </Container>
  );
};



export default Navbar;
