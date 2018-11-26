import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CardExampleCard extends React.Component {
    render() {
        return (
            <Card>
                <Image src={this.props.image} />
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                <Link to={this.props.link}>
                        View All
                </Link>
                </Card.Content>
            </Card>
        );
    }
}

export default CardExampleCard;
