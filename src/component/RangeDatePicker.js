import React from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class RangeDatePicker extends React.Component {
    constructor() {
        super();

        this.state = {
            startDate: null,
            endDate: null,
        };
    }

    render() {
        return (
            <div className="range-date-picker">
                <DatePicker
                    name="date_from"
                    selectsStart
                    selected={this.state.startDate}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart.bind(this)}
                    dateFormat="YYYY-MM-DD"
                />
                <DatePicker
                    name="date_to"
                    selectsEnd
                    selected={this.state.endDate}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd.bind(this)}
                    dateFormat="YYYY-MM-DD"
                />
            </div>
        )
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }
}

export default RangeDatePicker