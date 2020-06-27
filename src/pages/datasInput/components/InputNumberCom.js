import { InputNumber, Input, Select, Icon } from 'antd'

const { Option } = Select;

export const SimpleInputNumber = () => {
    
    const onChange = value => {
        console.log('changed', value)
    }

    return (
        <InputNumber min={1} max={10} step={0.1} defaultValue={2} onChange={onChange} 
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}

        />
    )
}

export const InputCom = () => {

    const selectBefore = (
        <Select defaultValue="Http://" style={{ width: 90}}>
            <Option value="Http://">Http://</Option>
            <Option value="Https://">Https://</Option>
        </Select>
    )
    const selectAfter = (
        <Select defaultValue=".com" style={{ width: 80}}>
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
        </Select>
    )
    return (
        <>
            <Input />
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
                </div>
            </div>
        </>
    )
}