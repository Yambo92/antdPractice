import React from 'react'
import { Rate, Icon } from 'antd'

export const RactCom = () => {
    return (
        <div>
            <Rate />
            <Rate character={<Icon type="heart" />} />
        </div>
    )
}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
export class RaterCom2 extends React.Component {
    state = {
        value: 3
    }
    handleChange = value => {
        this.setState({ value })
    }
    render() {
        const { value } = this.state;
        return (
            <span>
                <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                 {value ? <span className="ant-rate-tedxt">{desc[value - 1]}</span> : ''}
            </span>
        )
    }
}