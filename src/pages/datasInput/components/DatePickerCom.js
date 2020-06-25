import React from 'react'
import { DatePicker } from 'antd'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker

function onChange(date, dateString) {
    console.log(date, dateString)
}

export const DatePickerCom = () => {
    return (
        <>
            <DatePicker onChange={onChange} />
            <br />
            <MonthPicker onChange={onChange}  />
            <br />
            <RangePicker onChange={onChange} />
            <br />
            <WeekPicker onChange={onChange} placeholder="Select week" />
        </>
    )
}

export class DateRange extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };
    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if(!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf()
    };
    disabledEndDate = endValue => {
        const { startValue } = this.state;
        if(!startValue || !endValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }
    onChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }
    onStartChange = value => {
        this.onChange('startValue', value)
    };
    onEndChange = value => {
        this.onChange('endValue', value)
    }
    handleStartOpenChange = open => {
        if(!open) {
            this.setState({ endOpen: true});
        }
    }
    handleEndOpenChange = open => {
        this.setState({ endOpen: open })
    }
    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div>
                <DatePicker 
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={startValue}
                    placeholder="Start"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
                <DatePicker 
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={endValue}
                    placeholder="End"
                    onChange={this.onEndChange}
                    onOpenChange={this.handleEndOpenChange}
                />
            </div>
        )
    }

}