import React from 'react'
import { Tabs, Row, Col } from 'antd'
import { Complete,Complete2, Complete3 } from './components/AutoCompleteCom'
import { CheckboxCom,CheckboxCom2, CheckboxCom3, CheckboxCom4, CheckboxCom5 } from './components/CheckBoxCom'
const { TabPane } = Tabs;

const DatasInput = () => {
    return (
 
        <Tabs defaultActiveKey="1" >
         
            <TabPane tab="AutoComplete" key='1'>
                <Row>
                    <Col span={24}><Complete /></Col>
                    <Col span={24}><Complete2 /></Col>
                    <Col span={24}><Complete3 /></Col>
                </Row>
            </TabPane>
            <TabPane tab="CheckboxCom" key='2'>
                <Row>
                    <Col span={8}><CheckboxCom /></Col>
                    <Col span={8}><CheckboxCom2 /></Col>
                    <Col span={8}><CheckboxCom3 /></Col>
                </Row>
                <Row>
                    <Col span={8}><CheckboxCom4 /></Col>
                    <Col span={8}><CheckboxCom5 /></Col>
                </Row>
            </TabPane>
        </Tabs>

    )
}

export default DatasInput;