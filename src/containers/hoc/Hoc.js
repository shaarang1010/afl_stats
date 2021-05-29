import React from 'react';

import { Container } from 'semantic-ui-react';

const HOC = (props) => (
    <Container>
        {props.children}
    </Container>
)

export default HOC;

