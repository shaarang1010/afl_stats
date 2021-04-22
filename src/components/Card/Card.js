import React from "react";

import { Card, Icon } from "semantic-ui-react";

const CardComponent = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>
          <span>{props.meta}</span>
        </Card.Meta>
        <Card.Description>{props.children}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="calendar alternate" />
        {props.extra}
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
