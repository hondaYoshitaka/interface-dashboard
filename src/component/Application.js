import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import SearchForm from './SearchForm';
import ToolUsageSection from './ToolUsageSection';

const App = () => {
    return (
        <MuiThemeProvider>
            <Header/>

            <div id="contents">
                <SearchForm/>
                <ToolUsageSection/>
            </div>
        </MuiThemeProvider>
    )
};

export default App