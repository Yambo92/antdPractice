import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tabs, Row, Col } from 'antd'
import AfficCom from './components/AffixCom'
import BreadcrumbCom from './components/BreadcrumbCom'
import {MenuCom, MenuCom2, MenuCom3, MenuCom4, MenuCom5, MenuCom6} from './components/MenuCom'
import {PageCom, SimplePage, PageCom2, PageCom3 } from './components/PageCom'
import Menu2, {Sider} from './components/Menus'

const { TabPane } = Tabs;

const NavigatorComponents = () => {
    const [activeKey, setActiveKey] = React.useState('1')
    return (
        <PageHeaderWrapper>
        <Tabs defaultActiveKey="1" >
            <TabPane tab='Affix' key="1">
                <div style={{height: '300px', overflow: 'auto', border: '1px solid #999'}}>
                    <div style={{height: 400}}>zhanwiexx</div>cc
                <AfficCom />
                </div>
               
            </TabPane>
            <TabPane tab="Bread" key='2'>
                <BreadcrumbCom />
            </TabPane>
            <TabPane tab="Menu" key='3'>
                <Row>
                    <Col span={4}><MenuCom /></Col>
                    <Col span={4}><MenuCom2 /></Col> 
                    <Col span={4}><MenuCom3 /></Col> 
                    <Col span={4}><MenuCom4 /></Col> 
                </Row>
                <Row gutter={['10px', '30px']}>
                    <Col span={4}><MenuCom5 /></Col>
                    <Col span={4}><MenuCom6 /></Col>
                </Row>
            </TabPane>
            <TabPane tab="Menu2" key='4'>
                <Row>
                    <Col span={24}>
                        <Menu2 />
                    </Col>
                    <Col span={24}>
                        <Sider />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab="Paginations" key='5'>
                <Row>
                    <Col span={24}><PageCom /></Col>
                    <Col span={24}><SimplePage /></Col>
                    <Col span={24}><PageCom2/></Col>
                    <Col span={24}><PageCom3/></Col>
                </Row>
            </TabPane>
        </Tabs>
        </PageHeaderWrapper>
    )
}

export default NavigatorComponents;