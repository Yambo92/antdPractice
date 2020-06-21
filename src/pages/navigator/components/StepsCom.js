import React from 'react'
import { Steps, Icon, Button, message, Popover, Divider } from 'antd'

const {Step } = Steps

export const StepsCom = () => {
    return (
        <>
            <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This s second" />
                <Step title="Waiting" description="this s a " />
            </Steps>
        </>
    )
}

export const StepsCom2 = () => {
    return (
        <>
            <Steps direction="vertical">
                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
        </>
    )
}

const steps = [
    {
        title: 'First',
        content: 'First-content'
    },
    {
        title: 'Second',
        content: 'Second-content'
    },
    {
        title: 'Last',
        content: 'Last-content'
    }
];

class StepsCom3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
    }
    next(){
        const current = this.state.current + 1;
        this.setState({ current })
    }
    prev(){
        const current = this.state.current - 1;
        this.setState({ current })
    }
    render () {
        const {current} = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Process completed')}>Done</Button>
                        )}
                        {current > 0 && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
            </div>
        )
    }
}

export const StepsCom4 = () => {
    return (
        <>
            <div>
                <Steps progressDot current={1}>
                    <Step title="Finished" description="this si a" />
                    <Step title="in progress" description="this si a" />
                </Steps>
                <Divider />
                <Steps progressDot current={1} direction="vertical">
                    <Step title="Finished" description="This is "/>
                    <Step title="In Progress" description="This is "/>
                </Steps>
            </div>
        </>
    )
}

export {StepsCom3}

const customDot = (dot, {status, index}) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >{dot}</Popover>
)

export const StepsCom5 = () => {
    return (
        <Steps current={1} progressDot={customDot}>
            <Step title="Finished" description="sss" />
            <Step title="In progress" description="sssSSSS" />
            <Step title="waiting" description="等到" />
        </Steps>
    )
}

class StepsCom6 extends React.Component {
    state = {
        current: 0,
    };

    onChange = current => {
        this.setState({current})
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <Steps current={current} onChange={this.onChange}>
                    <Step title="Step 1" description="ddd" />
                    <Step title="Step 2" description="ddd" />
                    <Step title="Step 3" description="ddd" />
                </Steps>
            </div>
        )
    }
}
export {StepsCom6}