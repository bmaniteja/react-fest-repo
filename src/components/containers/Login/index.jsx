import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';

class AppLogin extends Component {

    componentDidMount() {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
              {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: false
              },
              firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
          });
    }

    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <div id="firebaseui-auth-container"></div>
            </Container>
        );
    }
}

export default AppLogin;