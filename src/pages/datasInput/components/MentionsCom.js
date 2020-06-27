import { Mentions } from 'antd'

const { Option } = Mentions;

export const MentionsCom = () => {
    const onChange = value => {
        console.log('Change: ', value)
    }
    const onSelect = option =>{
        console.log('select: ', option)
    }
    return (
        <Mentions
            style={{ width: '100%' }}
            onChange={onChange}
            onSelect={onSelect}
            defaultValue="@fds"
        >
            <Option value="asd">asd</Option>
            <Option value="asd2">asd2</Option>
            <Option value="asd3">asd3</Option>
        </Mentions>
    )
}