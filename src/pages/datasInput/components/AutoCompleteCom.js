import React from 'react'
import { AutoComplete, Row, Col, Input, Icon } from 'antd'
const { OptGroup, Option } = AutoComplete
const { TextArea } = Input;

function onSelect(value) {
    console.log('onSelect', value)
}

export class Complete extends React.Component {
    state = {
        value: '',
        dataSource: []
    };
    onSearch = searchText => {
        this.setState({
            dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]
        })
    };
    onChange = value => {
        this.setState({ value })
    };
    handleKeyPress = ev => {
        console.log('handleKeyPres', ev);
        
    }
    render() {
        const { dataSource, value } = this.state;
        return (
            <Row>
                <Col span={8}>
                <AutoComplete 
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={onSelect}
                    onSearch={this.onSearch}
                    placeholder="input here"
                />
                </Col>
                <Col span={8}>
                <AutoComplete 
                    value={value}
                    dataSource={dataSource}
                    style={{ width:200 }}
                    onSelect={onSelect}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    placeholder='control mode'
                />
                </Col>
                <Col span={8}>
                    <AutoComplete
                        dataSource={dataSource}
                        style={{ width: 200 }}
                        onSelect={onSelect}
                        onSearch={this.onSearch}
                    >
                        <TextArea 
                            placeholder="input here"
                            className="custom"
                            style={{ height: 50 }}
                            onKeyPress={this.handleKeyPress}
                        />
                    </AutoComplete>
                </Col>
            </Row>
                
        )
    }
}


const dataSource = [
    {
        title: 'Libraries',
        children: [
            {
                title: "AntDesign",
                count: 10000,
            },
            {
                title: 'antDesign UI',
                count: 10600
            }
        ]
    },
    {
        title: 'Articles',
        children: [
            {
                title: 'antdesign design language',
                count: 10000,
            }
        ]
    }
]
function renderTitle(title) {
    return (
        <span>
            {title}
            <a style={{ float: 'right' }}>More</a>
        </span>
    )
}

const options = dataSource.map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
        {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
                {opt.title}
        <span>{opt.count} people</span>
            </Option>
        ))}
    </OptGroup>
)).concat([
    <Option disabled key='all'>
        <a>View all results</a>
    </Option>
])

export function Complete2() {
    return (
        <div>
            <AutoComplete
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300 }}
                size="large"
                dataSource={options}
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search"/>} />
            </AutoComplete>
        </div>
    )
}

export class Complete3 extends React.Component {
    state = {
        result: [],
    };
    handleSearch = value => {
        let result;
        if(!value || value.indexOf("@") >= 0) {
            result = [];
        } else {
            result = ["gmail.com", "163.com", 'qq.com'].map(domain => `${value}@${domain}`)
        }
        this.setState({ result })
    };
    render() {
        const { result } = this.state;
        const children = result.map(email => <Option key={email}>{email}</Option>)
        return (
            <AutoComplete style={{ width: 200}} onSearch={this.handleSearch}>
                {children}
            </AutoComplete>
        )
    }
}