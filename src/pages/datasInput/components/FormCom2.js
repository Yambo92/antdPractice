import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button, Checkbox } from 'antd'

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24},
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
    }
};

const CusTomFormCom = () => {
    return (
        <Form {...formItemLayout}>
            <Form.Item
            label="Fail"
            validateStatus="error"
            help="Should be comnination of numbers & alphabets"
            >
                <Input placeholder="unavailable choice" id="error" />
            </Form.Item>
            <Form.Item
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="the infomation is being validated..."
            >
                <Input placeholder="cfff" id="validating" />
            </Form.Item>
        </Form>
    )
}

class App2 extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('received values of form: ', values)
            }
        })
    }
    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `HI, ${value === 'male' ? 'man' : 'lady'}`
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Note">
                    {getFieldDecorator('note', {
                        rules: [{ required: true, message: 'sssdsd'}]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Gender">
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'sfetgerf' }]
                    })(
                        <Select 
                            placeholder="ref"
                            onChange={this.handleSelectChange}
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedApp2 = Form.create({ name: 'coordinated'})(App2)

class DynamicRule extends React.Component {
    state = {
        checkNick: false,
    };
    check = () => {
        this.props.form.validateFields(err => {
            if(!err) {
                console.log('success')
            }
        })
    };
    handleChange = e => {
        this.setState(
            {
                checkNick: e.target.checked
            },
            () => {
                this.props.form.validateFields(['nickname'], {force: true})
            }
        )
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form.Item {...formItemLayout} label="Name">
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: 'sfsf'
                            }
                        ]
                    })(<Input  />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Nickname">
                    {getFieldDecorator('nickname', {
                        rules: [
                            {
                                required: this.state.checkNick,
                                message: 'Please input'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout}>
                    <Checkbox checked={this.state.checkNick} onChange={this.handleChange}>
                        NickName is required
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.check}>Check</Button>
                </Form.Item>
            </div>
        )
    }
}

const WrappedDynamicRule = Form.create({ name: 'dynamic_rule'})(DynamicRule)

export { 
    CusTomFormCom,
    WrappedApp2,
    WrappedDynamicRule
}