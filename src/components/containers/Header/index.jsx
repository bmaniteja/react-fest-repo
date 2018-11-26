import React, { Component } from 'react';
import { Menu, Container, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';

class AppHeader extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Link to={'/'}>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            Pet Store
                        </Menu.Item>
                    </Link>
                    <Dropdown item simple text='Pets'>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to={'/pets/dogs'}>
                                    <a>Dogs</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/pets/cats'}>
                                    <a>Cats</a>
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        );
    }
}

export default AppHeader;