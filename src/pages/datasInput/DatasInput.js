import React from 'react'
import { Tabs, Row, Col } from 'antd'
import { Complete,Complete2, Complete3 } from './components/AutoCompleteCom'
import { CheckboxCom,CheckboxCom2, CheckboxCom3, CheckboxCom4, CheckboxCom5 } from './components/CheckBoxCom'
import { CascaderCom, CascaderCom2, LasyOptions } from './components/CascaderCom'
import { DatePickerCom, DateRange } from './components/DatePickerCom'
import { WrappedHorizontalLoginForm, WrappedNormalLoginForm, WrappedRegistrationForm , WrappedAdvancedSearchForm,
     CollectionsPage, WrappedDynamicFieldSet,
     WrappedTimeRelatedForm, WrappedDemo, Demo2, RawForm 
    } from './components/FormCom' 
import { CusTomFormCom, WrappedApp2,WrappedDynamicRule } from './components/FormCom2'
import { SimpleInputNumber, InputCom } from './components/InputNumberCom'
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
            <TabPane tab="Cascader" key='3'>
                <Row>
                    <Col span={8}><CascaderCom /></Col>
                    <Col span={8}><CascaderCom2 /></Col>
                </Row>
                <Row>
                    <Col span={8}><LasyOptions /></Col>
                </Row>
            </TabPane>
            <TabPane tab="DatePicker" key='4'>
                <Row>
                    <Col span={8}><DatePickerCom /></Col>
                </Row>
                <Row>
                    <Col span={24}><DateRange /></Col>
                </Row>
            </TabPane>
            <TabPane tab="Form" key='5'>
                <Row gutter={[0, 24]}>
                    <Col span={24}><WrappedHorizontalLoginForm /></Col>
                    <Col span={24}><WrappedNormalLoginForm /></Col>
                    <Col span={24}><WrappedRegistrationForm /></Col>
                    <Col span={24}><WrappedAdvancedSearchForm /></Col>
                    <Col span={24}><CollectionsPage /></Col>
                    <Col span={24}><WrappedDynamicFieldSet /></Col>
                    <Col span={24}><WrappedTimeRelatedForm /></Col>
                    <Col span={24}><WrappedDemo /></Col>
                    <Col span={24}><Demo2 /></Col>
                    <Col span={24}><RawForm /></Col>
                    <Col span={24}><CusTomFormCom /></Col>
                    <Col span={24}><WrappedApp2 /></Col>
                    <Col span={24}><WrappedDynamicRule /></Col>
                </Row>
            </TabPane>
            <TabPane tab="InputNumber" key='6'>
                <Row gutter={[0, 24]}>
                    <Col span={24}><SimpleInputNumber /></Col>
                    <Col span={24}><InputCom /></Col>
                   
                </Row>
            </TabPane>
        </Tabs>

    )
}

export default DatasInput;