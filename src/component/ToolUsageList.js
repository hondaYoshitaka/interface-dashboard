import React from 'react';
import {connect} from 'react-redux';

import {fetchToolUsages} from '../action/tool-usage';


class ToolUsageList extends React.Component {
    componentDidMount() {
        //this.props.fetchData('https://localhost:8080/prod/v1/tools');
    }

    render() {
        if (this.props.hasError) {
            return <p> error </p>;
        }
        if (this.props.isLoading) {
            return <p> Loading...</p>;
        }

        if (!this.props.toolUsages) {
            return <p> no data </p>;
        }
        return (
            <table>
                <tr>
                    <th>tool name</th>
                    <th>count</th>
                </tr>
                {this.props.toolUsages.map((item) => (
                    <tr>
                        <td>{item.toolName}</td>
                        <td>{item.count}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

const mapStateToProps = state => ({
    toolUsages: state.toolUsages,
    hasError: state.fetchToolUsagesError,
    isLoading: state.loadToolUsages,
});

const mapDispatchToProps = dispatch => ({
    fetchData: (url) => dispatch(fetchToolUsages(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolUsageList);