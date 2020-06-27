import { Form, Icon, Input, Button, Checkbox, Tooltip, Cascader, Select, Row, Col, AutoComplete, Modal, Radio, DatePicker, TimePicker, InputNumber } from 'antd'
import React from 'react'

const { MonthPicker, RangePicker } = DatePicker;

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
 class FormCom extends React.Component {
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Reveived values of form: ', values)
            }
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ""}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username'}]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password'}]
                    })(
                        <Input 
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,0.25'}} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >Login</Button>
                </Form.Item>
            </Form>
        )
    }
} 

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login'})(FormCom)

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form :', values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password'}]
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type='primary' htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    Or <a href=" ">register now</a>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
]

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values)
            }
        })
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if(value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent')
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if(value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback(); 
    };
    handleWebsiteChange = value => {
        let autoCompleteResult;
        if(!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult})
    }

    render () {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail',
                            },
                            {
                                required: true,
                                message: 'Please input your email'
                            }
                        ]
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password',
                            },
                            {
                                validator: this.validateToNextPassword,
                            }
                        ]
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password'
                            },
                            {
                                validator: this.compareToFirstPassword
                            }
                        ]
                    })(
                        <Input.Password onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Nickname&nbsp;
                            <Tooltip title="what do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'ssss', whitespace: true}]
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="Habitual" >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [
                            { type: 'array', required: true, message: 'dddd'}
                        ],
                    })(
                        <Cascader options={residences} />
                    )}
                </Form.Item>
                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'ssss'}]
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%'}} />
                    )}
                </Form.Item>
                <Form.Item label='website'>
                    {getFieldDecorator('website', {
                        rules: [{required: true, message: 'sss'}]
                    })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder='website'
                        >
                            <Input />
                        </AutoComplete>
                    )}
                </Form.Item>
                <Form.Item label='Captcha' extra="we must make sure that you are human">
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{required: true, message: 'sfdsf'}]
                            })(
                                <Input />
                            )}
                        </Col>
                        <Col span={12}>
                            <Button>Get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType='submit'>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm)


class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };
    // to generate mock Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for(let i=0; i<10; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i< count ? 'block' : 'none' }}>
                    <Form.Item label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                { required: true, message: 'Input something'}
                            ]
                        })(<Input placeholder="placeholder" />)}
                    </Form.Item>
                </Col>,
            )
        };
        return children
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values)
        })
    };

    handleReset = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({expand: !expand})
    }

    render() {
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right'}}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                        </a>
                    </Col>
                </Row>
            </Form>
        )
    }
}
const WrappedAdvancedSearchForm = Form.create({name: 'advanced_search'})(AdvancedSearchForm)


const CollectionCreateForm = Form.create({name: 'form_in_modal'})(
    class extends React.Component {
        render() {
            /* 经过 Form.create 包装的组件将会自带 this.props.form 属性， */
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of collection'}]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public'
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
);

class CollectionsPage extends React.Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false })
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if(err){
                return;
            }
            console.log('Received values of form: ', values)
            form.resetFields();
            this.setState({visible: false})
        })
    };

    saveFormRef = formRef => {
        this.formRef = formRef
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <CollectionCreateForm 
                 /* 子组件在经过 Form.create 之后如果要拿到 ref，可以使用 rc-form 提供的 wrappedComponentRef */
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

let id = 0;

class DynamicFieldSet extends React.Component {
    
    remove = k => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys')
        if(keys.length === 1) {
            return
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k)
        })
    }

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys')
        const nextKeys = keys.concat(id++)
        form.setFieldsValue({
            keys: nextKeys,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                const { keys, names} = values;
                console.log('received values of form: ', values)
                console.log('Merged values: ', keys.map(key => names[key]))
            }
        })
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24}, sm: {span: 4}
            },
            wrapperCol: {
                xs: { span: 24}, sm: { span: 20}
            }
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 4},
            }
        };
        getFieldDecorator('keys', { initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passengers' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: '请输入'
                        }
                    ]
                })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                    <Icon 
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        return (
            <Form onSubmit={this.handleSubmit}>
                {formItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add Field
                    </Button>
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item'})(DynamicFieldSet)


class TimeRelatedForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if(err) return;
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker']
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                'range-time-picker': [
                    rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                    rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                  ],
                'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            }
            console.log('received values: ', values)
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 }, sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 }, sm: { span: 16 }
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select'}]
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'please select'}]
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="DatePicker">
                    {getFieldDecorator('date-picker', config)(<DatePicker />)}
                </Form.Item>
                <Form.Item label="DatePicker[showTime]">
                    {getFieldDecorator('date-time-picker', config)(
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                    )}
                </Form.Item>
                <Form.Item label="MonthPicker">
                    {getFieldDecorator('month-picker', config)(<MonthPicker />)}
                </Form.Item>
                <Form.Item label="RangePicker">
                    {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
                </Form.Item>
                <Form.Item label="RangePicker[showTime]">
                    {getFieldDecorator('range-time-picker', rangeConfig)(
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                    )}
                </Form.Item>
                <Form.Item label="TimePicker">
                        {getFieldDecorator('time-picker', config)(<TimePicker />)}
                </Form.Item>
                <Form.Item 
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 }
                    }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm)

class PriceInput extends React.Component {
    handleNumberChange = e => {
        const number = parseInt(e.target.value || 0, 10)
        if(isNaN(number)) {
            return;
        }
        this.triggerChange({ number })
    }

    triggerChange = changedValue => {
        const { onChange, value} = this.props;
        if(onChange) {
            onChange({
                ...value,
                ...changedValue
            })
        }
    };

    handleCurrencyChange = currency => {
        this.triggerChange({ currency })
    }

    render() {
        const { size, value } = this.props;
        return (
            <span>
                <Input 
                    type="text"
                    size={size}
                    value={value.number}
                    onChange={this.handleNumberChange}
                    style={{ width: '65%', marginRight: '3%' }}
                />
                <Select
                    value={value.currency}
                    size={size}
                    style={{ width: '32%' }}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value='rmb'>RMB</Option>
                    <Option value='dollar'>Dollar</Option>
                </Select>
            </span>
        )
    }
}

class PriceDemo extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values)
            }
        })
    }
    checkPrice = (rule, value, callback) => {
        if(value.number > 0) {
            return callback();
        }
        callback('Price must greater than zero!')
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item label="Price">
                    {getFieldDecorator('price', {
                        initialValue: { number: 0, currency: 'rmb' },
                        rules: [{ validator: this.checkPrice }],
                    })(<PriceInput />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedDemo = Form.create({ name: 'customized_form_controls'})(PriceDemo)

const CustomizedForm = Form.create({
    name: 'global_state',
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields)
    },
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username.value
            })
        }
    },
    onValuesChange(_, values) {
        console.log(values)
    }
})(props => {
    const { getFieldDecorator } = props.form;
    return (
        <Form layout="inline">
            <Form.Item label="Username">
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Username is required'}]
                })(<Input />)}
            </Form.Item>
        </Form>
    )
})

class Demo2 extends React.Component {
    state = {
        fields: {
            username: {
                value: 'benjycui'
            }
        }
    }
    handleFormChange = changedFields => {
        this.setState(({ fields }) => ({
            fields: {...fields, ...changedFields}
        }))
    }
    render() {
        const { fields } = this.state;
        return (
            <div>
                <CustomizedForm {...fields} onChange={this.handleFormChange} />
                <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
            </div>
        )
    }
}

function validatePrimeNumber(number) {
    if(number === 11) {
        return {
            validateStatus: 'success',
            errorMsg: null,
        }
    }
    return {
        validateStatus: 'error',
        errorMsg: 'The Prime between 8 and 12 is 11'
    }
}

class RawForm extends React.Component {
    state = {
        number: {
            value: 11,
        }
    }
    handleNumberChange = value => {
        this.setState({
            number: {
                ...validatePrimeNumber(value),
                value,
            }
        })
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 },
        };
        const { number } = this.state;
        const tips = 
            'A prime is a natural number greater than 1 '
        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label="Prime between 8 & 12"
                    validateStatus={number.validateStatus}
                    help={number.errorMsg || tips}
                >
                    <InputNumber min={8} max={12} value={number.value} onChange={this.handleNumberChange} />
                </Form.Item>
            </Form>
        )
    }
}

export { WrappedHorizontalLoginForm, 
    WrappedNormalLoginForm, 
    WrappedRegistrationForm , 
    WrappedAdvancedSearchForm, 
    CollectionsPage,
    WrappedDynamicFieldSet,
     WrappedTimeRelatedForm,
     WrappedDemo,
     Demo2,
     RawForm
    }

