import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class AppHome extends Component {
    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>{this.props.match.params.type}</Header>
            </Container>
        );
    }
}

export default AppHome;