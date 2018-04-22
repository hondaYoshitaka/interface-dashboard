import React from 'react'
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import Header from './Header';
import ToolUsageSearch from './ToolUsageSearch';

const muiTheme = getMuiTheme({
    appBar: {
        background: '#123456',
    },
});

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Header/>

            <div id="contents">
                <ToolUsageSearch/>
            </div>
        </MuiThemeProvider>
    )
};

export default App