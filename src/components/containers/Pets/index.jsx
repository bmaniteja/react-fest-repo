import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import 'whatwg-fetch';
import HomeCard from '../../common/Card';

class PetsHome extends Component {  
    constructor(props) {
        super();

        this.state = {
            petsList: []
        };
    }

    componentWillMount() {
        window.fetch(`https://us-central1-react-fest.cloudfunctions.net/getPetsList?type=${this.props.match.params.type}`)
        .then((response) => {
            return response.json()
        }).then((petsList) => {
            this.setState({ petsList });
        })
    }

    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>{this.props.match.params.type}</Header>
                {this.state.petsList.map( (pet, index) => {
                    return <HomeCard link={`/pet/${this.props.match.params.type}/${index}`} title={pet.name} image={pet.image}/>
                })}
            </Container>
        );
    }
}

export default PetsHome;