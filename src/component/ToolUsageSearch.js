import React from 'react'
import {connect} from 'react-redux'
import {RaisedButton} from 'material-ui'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import {fetchToolUsages} from '../action/fetch-tool-usage'
import {setEndDate, setStartDate} from '../action/set-search-date'

import 'react-datepicker/dist/react-datepicker.css'


const DATE_FORMAT = 'YYYY-MM-DD';

class ToolUsageSection extends React.Component {

    convertDateToMoment(date) {
        if (!date) {
            return null;
        }
        return moment(date);
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
        return ([
            <section id="section-search-tool-usages">
                <h2 className="subtitle-search">ツール使用状況の検索</h2>
                <div className="range-date-picker">
                    <DatePicker
                        name="startDate"
                        selectsStart
                        selected={this.convertDateToMoment(this.props.startDate)}
                        startDate={this.convertDateToMoment(this.props.startDate)}
                        endDate={this.convertDateToMoment(this.props.endDate)}
                        onChange={this.props.handleOnChangeStart}
                        placeholderText="2000-01-01"
                        dateFormat={DATE_FORMAT}
                        maxDate={moment()}
                    />
                    <DatePicker
                        name="endDate"
                        selectsEnd
                        selected={this.convertDateToMoment(this.props.endDate)}
                        startDate={this.convertDateToMoment(this.props.startDate)}
                        endDate={this.convertDateToMoment(this.props.endDate)}
                        onChange={this.handleOnChangeEnd}
                        placeholderText="2000-01-31"
                        dateFormat={DATE_FORMAT}
                        maxDate={moment()}
                    />
                </div>
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
