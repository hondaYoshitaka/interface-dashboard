import React from 'react'
import {connect} from 'react-redux';

import {clickSearch} from '../action/search-button';

class SearchButton extends React.Component {
    render() {
        return (
            <button type="button"
                    disabled={this.props.isSearching}
                    onClick={this.props.handleClick}>
                Search
            </button>
        )
    }
}

const mapStateToProps = state => ({
    isSearching: state.isSearching,
});

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch(clickSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);