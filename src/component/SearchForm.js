import React from 'react';

import RangeDatePicker from './RangeDatePicker';
import SearchButton from './SearchButton';

class SearchForm extends React.Component {
    render() {
        return (
            <section id="search-tool-usage">
                <RangeDatePicker/>
                <SearchButton/>
            </section>
        )
    }
}

export default SearchForm;