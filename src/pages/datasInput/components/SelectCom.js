import React from 'react'
import { Select, Spin } from 'antd'
import debounce from 'lodash/debounce'

const { Option } = Select;

export class SimpleCom extends React.Component {
    handleChange = value => {
        console.log(`selected ${value}`)
    }
    render () {
        return (
            <div>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="lucys" disabled>Lucys</Option>
                </Select>
                <Select defaultValue={['lucy', 'jack']} mode="multiple" style={{ width: '100%' }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="lucys" disabled>Lucys</Option>
                </Select>
                <Select
                    mode="multiple"
                    style={{ width: '100%'}}
                    defaultValue={['china']}
                    onChange={this.handleChange}
                    optionLabelProp="label"
                >
                    <Option value="china" label="中国">
                        <span role="img" aria-label="China">
                            🇨🇳
                        </span>
                        China(中国)
                    </Option>
                    <Option value="usa" label="美国">
                        <span role="img" aria-label="USA">
                            us
                        </span>
                        America(美国)
                    </Option>
                </Select>
            </div>
        )
    }
}

export class UserRemoteSelect extends React.Component {
    constructor(props) {
        super(props);
        this.lastFetchId = 0;
        this.fetchUser = debounce(this.fetchUser, 800) //防抖函数（用户在最后一次输入的800ms之后执行事件）
    }
    state = {
        data: [],
        value: [],
        fetching: false,
    };

    fetchUser = value => {
        console.log('fetching user', value);
        this.lastFetchId += 1;
        const fetchId = this.lastFetchId;
        this.setState({ data: [], fetching: true});
        fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(body => {
            if(fetchId !== this.lastFetchId) {
                return;
            }
            const data = body.results.map(user => ({
                text: `${user.name.first} ${user.name.last}`,
                value: user.login.username
            }));
            this.setState({ data, fetching: false})
        })
    }

    handleChange = value => {
        this.setState({
            value,
            data: [],
            fetching: false
        })
    };
    render() {
        const { fetching, data, value } = this.state;
        return (
            <Select 
                mode="multiple"
                labelInValue
                value={value}
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={this.fetchUser}
                onChange={this.handleChange}
                style={{ width: '100%'}}
            >
                {data.map(d => (
                    <Option key={d.value}>{d.text}</Option>
                ))}
            </Select>
        )
    }
}