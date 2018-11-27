import React, { Component } from 'react';
import { Container, Header, Image, Comment, Form, Button } from 'semantic-ui-react';
import 'whatwg-fetch';
import Moment from 'react-moment';
import firebase from 'firebase';
import sillyname from 'sillyname';

class PetDetails extends Component {
    constructor(props) {
        super();

        this.state = {
            petsDetails: null,
            comments: null,
            currentComment: ""
        };
    }

    componentWillMount() {
        window.fetch(`https://us-central1-react-fest.cloudfunctions.net/getPetDetails?type=${this.props.match.params.type}&id=${this.props.match.params.id}`)
            .then((response) => {
                return response.json()
            }).then((petsDetails) => {
                this.setState({ petsDetails });
            });
        firebase.database().ref(`/pets/${this.props.match.params.type}/${this.props.match.params.id}/comments`).on('value', snapShot => {
            this.setState({ comments: snapShot.val() })
        });

    }

    addComment = () => {
        if (this.state.currentComment) {
            firebase.database().ref(`/pets/${this.props.match.params.type}/${this.props.match.params.id}/comments`).push({
                "avatar": "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
                "comment": this.state.currentComment,
                "from": sillyname(),
                "time": new Date().getTime()
            }, () => {
                this.setState({currentComment: ""});
            });
        }
    }

    render() {
        return this.state.petsDetails ? (
            <Container text style={{ marginTop: '7em', marginBottom: '7em' }}>
                <Header as='h1' floated="left">{this.state.petsDetails.name}</Header>
                <Container text textAlign="left" style={{ paddingTop: '4em' }}>
                    <Image
                        floated='left'
                        size='medium'
                        src={this.state.petsDetails.image}
                        style={{ margin: '2em 2em 2em -4em' }}
                    />
                    <p>{this.state.petsDetails.description}</p>
                </Container>
                <Container textAlign="left" text style={{ marginTop: '2em' }}>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Comments
                        </Header>
                        {this.state.comments && Object.keys(this.state.comments).map(id => {
                            const comment = this.state.comments[id];
                            return (
                                <Comment key={id}>
                                    <Comment.Avatar src={comment.avatar} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{comment.from}</Comment.Author>
                                        <Comment.Metadata>
                                            <div><Moment fromNow>{comment.time}</Moment></div>
                                        </Comment.Metadata>
                                        <Comment.Text>{comment.comment}</Comment.Text>
                                    </Comment.Content>
                                </Comment>);
                        })
                        }
                        <Form reply>
                            <Form.TextArea value={this.state.currentComment} onInput={(e, val) => { 
                                    this.setState({ currentComment: val.value }) 
                                }} />
                            <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={this.addComment} />
                        </Form>
                    </Comment.Group>
                </Container>
            </Container>
        ) : null;
    }
}

export default PetDetails;