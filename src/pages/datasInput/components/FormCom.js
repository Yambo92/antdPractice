import { Form, Icon, Input, Button, Checkbox, Tooltip, Cascader, Select, Row, Col, AutoComplete } from 'antd'
import React from 'react'

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

export { WrappedHorizontalLoginForm, WrappedNormalLoginForm, WrappedRegistrationForm }

