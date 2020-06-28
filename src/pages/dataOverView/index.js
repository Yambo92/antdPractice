import React from 'react'
import { Tabs, Row, Col } from 'antd'
import { DemoTree, DragTree } from './components/TreeCom'
const { TabPane } = Tabs;

const DatasOverView = () => {
    return (
 
        <Tabs defaultActiveKey="1" >
         
            <TabPane tab="tree" key='1'>
                <Row>
                    <Col span={24}><DemoTree /></Col>
                    <Col span={24}><DragTree /></Col>
                </Row>
            </TabPane>
           
        </Tabs>

    )
}

export default DatasOverView;