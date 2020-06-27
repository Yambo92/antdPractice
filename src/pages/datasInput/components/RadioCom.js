import React from 'react'
import { Radio } from 'antd'

export class App extends React.Component {
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        })
    }
    render() {
        return (
            <Radio.Group name="radiogroup" defaultValue={1} onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
        )
    }
}
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple'},
    { label: 'Pear', value: 'Pear'},
    { label: 'Orange', value: 'Orange', disabled: true},
]
export class App2 extends React.Component {
    state = {
        value: 'Apple'
    }
    onChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return (
            <div>
                <Radio.Group options={optionsWithDisabled} onChange={this.onChange} value={this.state.value} />
            </div>
        )
    }
}

export class App3 extends React.Component {
    render() {
        return (
            <div>
                <Radio.Group defaultValue="a" buttonStyle="sold">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
}