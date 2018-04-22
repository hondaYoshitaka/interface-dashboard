import React from 'react';

import {AppBar} from 'material-ui';

class Header extends React.Component {
    render() {
        return (
            <header>
                <AppBar title="Interface"
                        showMenuIconButton={false}/>
            </header>
        )
    }
}

export default Header;