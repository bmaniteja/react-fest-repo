import React, { Component } from 'react';
import { Connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import 'whatwg-fetch';
import HomeCard from '../../common/Card';
import { fetchPetList } from '../../../actions/petList';

class PetsHome extends Component {  
    constructor(props) {
        super(props);
        props.dispatch(fetchPetList(props.match.params.type));
    }

    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>{this.props.match.params.type}</Header>
                {this.props.petsList.list.map( (pet, index) => {
                    return <HomeCard link={`/pet/${this.props.match.params.type}/${index}`} title={pet.name} image={pet.image}/>
                })}
            </Container>
        );
    }
}

const mapStateToProps(state) => {
    return {
        petsList: state.petsList
    };
};

export default Connect(mapStateToProps)(PetsHome);
