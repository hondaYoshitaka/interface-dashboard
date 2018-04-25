import React from 'react'
import {connect} from 'react-redux'
import {RaisedButton} from 'material-ui'

import 'react-dates/initialize';
import DateRangePickerWrapper from './DateRangePickerWrapper'
import {fetchToolUsages} from '../action/fetch-tool-usage'
import {setEndDate, setStartDate} from '../action/set-search-date'


const DATE_FORMAT = 'YYYY-MM-DD';

class ToolUsageSection extends React.Component {
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
        return ([
            <section id="section-search-tool-usages">
                <h2 className="subtitle-search">ツール使用状況の検索</h2>

                <DateRangePickerWrapper displayFormat={DATE_FORMAT}/>

                <RaisedButton label="検索する"
                              disabled={this.props.isLoading}
                              onClick={() => {
                                  this.props.handleOnClick(this.props.startDate, this.props.endDate);
                              }}
                />
            </section>,
            <section id="section-show-tool-usages">
                <table>
                    <thead>
                    <tr>
                        <th>tool name</th>
                        <th>count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.toolUsages.map((item) => (
                        <tr>
                            <td>{item.toolName}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        ])
    }
}

const mapStateToProps = state => ({
    startDate: state.changeStartDate.startDate,
    endDate: state.changeEndDate.endDate,
    toolUsages: state.searchToolUsages.toolUsages,
    isLoading: state.searchToolUsages.isLoading,
    hasError: state.searchToolUsages.hasError,
});

const mapDispatchToProps = (dispatch) => ({
    handleOnClick: (startDate, endDate) => dispatch(fetchToolUsages(startDate, endDate)),
    handleOnChangeStart: (moment) => dispatch(setStartDate(moment.format(DATE_FORMAT))),
    handleOnChangeEnd: (moment) => dispatch(setEndDate(moment.format(DATE_FORMAT))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolUsageSection);
