import React from "react";

import { Modal, Button } from "semantic-ui-react";

const ModalWindow = (props) => {
  return (
    <Modal
      onClose={props.close}
      onOpen={props.onOpen}
      open={props.open}
      closeOnDimmerClick={false}
    >
      <Modal.Header>{props.header}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{props.description}</Modal.Description>
        {props.children}
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="red"
          onClick={props.close}
          icon="cancel"
          content="cancel"
        />
        <Button
          color="green"
          onClick={props.onOpen}
          icon="checkmark"
          content="Continue"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalWindow;
