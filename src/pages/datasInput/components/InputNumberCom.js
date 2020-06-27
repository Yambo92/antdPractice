import { InputNumber, Input, Select, Icon, Col, Row, DatePicker, AutoComplete, Cascader, Tooltip } from 'antd'

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

const { Search } = Input;
export const SearchCom = () => {
    return (
        <div>
            <Search 
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            <br />
            <br />
            <Search 
                placeholder="input text" onSearch={value => console.log(value)}
                enterButton
            />
            <br />
            <br />
            <Search 
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
            />
        </div>
    )
}

const InputGroup = Input.Group;

const options = [
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
              label: 'West Lake',
            },
          ],
        },
      ],
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
  ];

  class CompactDemo extends React.Component {
      state = {
          dataSource: [],
      };
      handleChange = value => {
          this.setState({
              dataSource: 
                !value || value.indexOf('@') >= 0 ? [] : [`${value}@gmail.com`, `${value}@163.com`]
          })
      }
      render() {
          return (
              <div>
                  <InputGroup size="large">
                      <Row gutter={8}>
                          <Col span={5}>
                            <Input defaultValue="0571" />
                          </Col>
                          <Col span={8}>
                              <Input defaultValue="268888" />
                          </Col>
                      </Row>
                  </InputGroup>
              </div>
          )
      }
  }

  const { TextArea } = Input;
  export class Demo3 extends React.Component {
      state = {
          value: ''
      }
      onChange = ({ target: { value }}) => {
          this.setState({ value })
      };
      render() {
          const { value } = this.state;
          return (
              <div>
                  <TextArea placeholder="Autosize" autoSize />
              </div>
          )
      }
  }

  export const InputCom5 = () => {
      return (
          <div>
              <Input 
                prefix={<Icon type="user" style={{ color: '#ccc'}} />}
                suffix={
                    <Tooltip title="Extra information">
                        <Icon type="info-circle" style={{ color: '#333' }} />
                    </Tooltip>
                }
              />
          </div>
      )
  }