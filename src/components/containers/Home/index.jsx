import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';

import HomeCard from '../../common/Card';
import cat from '../../../images/cat.png';
import dog from '../../../images/dog.png';


class AppHome extends Component {
    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
            <Card.Group>
                <HomeCard title="Dogs" link="/pets/dogs" image={dog} />
                <HomeCard title="Cats" link="/pets/cats" image={cat} />
            </Card.Group>
            </Container>
        );
    }
}

export default AppHome;