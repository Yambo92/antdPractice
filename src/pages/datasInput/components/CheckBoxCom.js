import React from 'react'
import { Checkbox, Row, Col, Button } from 'antd'

export const CheckboxCom = () => {
    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox defaultChecked={false} disabled />
        <Checkbox defaultChecked disabled />
        </>
    )
}

export class CheckboxCom2 extends React.Component {
    state={
        checked: true,
        disabled: false,
    };
    toggleChecked = () => {
        this.setState({ checked: !this.state.checked })
    };
    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled })
    };
    onChange = e => {
        console.log('checked = ', e.target.checked)
        this.setState({
            checked: e.target.checked,
        });
    }

    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
            this.state.disabled ? 'Disabled' : 'Enabled'
        }`;
        return (
            <div>
                <p style={{ marginBottom: '20px' }}>
                    <Checkbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                    >
                        {label}
                    </Checkbox>
                </p>
                <p>
                    <Button type="primary" size="small" onClick={this.toggleChecked}>
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                    </Button>
                    <Button
                        style={{ marginLeft: '10px' }}
                        type="primary"
                        size="small"
                        onClick={this.toggleDisable}
                    >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                    </Button>
                </p>
            </div>
        )
    }
}

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export class CheckboxCom3 extends React.Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };
    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length
        })
    }
    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked
        })
    }
    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #e9e9e9' }}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup 
                    options={plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export const CheckboxCom4 = () => {
    const onChange = checkedValues => {
        console.log('checked= ', checkedValues)
    }
    const plainOptions = [ 'Apple', 'Pear', 'Orange' ];
    const options = [
        { label: 'Apple', value: 'Apple'},
        { label: 'Pear', value: 'Pear'},
        { label: 'Orange', value: 'Orange'},
    ]
    const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
    ]
    return (
        <div>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            <br />
            <br />
            <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
            <br />
            <br />
            <Checkbox.Group
                options={optionsWithDisabled}
                disabled
                defaultValue={['Apple']}
                onChange={onChange}
            />
        </div>
    )
}

export const CheckboxCom5 = () => {
    const onChange = checkedValues => {
        console.log('checked= ', checkedValues)
    }
    return (
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Row>
                <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    )
}