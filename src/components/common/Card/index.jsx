import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class CardExampleCard extends React.Component {
    render() {
        return (
            <Card>
                <Image src={this.props.image} />
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        View All
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

export default CardExampleCard;
