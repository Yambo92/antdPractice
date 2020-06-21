import React from 'react'
import { Tabs, Row, Col } from 'antd'

const { TabPane } = Tabs;

const DatasInput = () => {
    return (
 
        <Tabs defaultActiveKey="1" >
         
            <TabPane tab="AutoComplete" key='1'>
                <Row>
                    <Col span={24}>Datas</Col>
                </Row>
            </TabPane>
        </Tabs>

    )
}

export default DatasInput;