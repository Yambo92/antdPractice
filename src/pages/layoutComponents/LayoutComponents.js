import React from 'react'
import GridComponents from './components/GridComponents'
import GridComponents2 from './components/GridComponents2'
import LayoutCom from './components/LayoutCom'
import LayoutCom2 from './components/LayoutCom2'
import LayoutCom3 from './components/LayoutCom3'
import { Tabs } from 'antd'
import './styles.less'
const { TabPane } = Tabs;
const LayoutComponents = () => {
    const [activeKey, setActiveKey] = React.useState('1')
    return (
        <>
        <Tabs defaultActiveKey="1" >
            <TabPane tab='Grid1' key="1">
             <GridComponents />
            </TabPane>
            <TabPane tab="Grid2" key='2'>
                <GridComponents2 />
            </TabPane>
            <TabPane tab="Grid3" key='3'>
                <LayoutCom />
            </TabPane>
            <TabPane tab="Grid4" key='4'>
                <LayoutCom2 />
            </TabPane>
            <TabPane tab="Grid5" key='5'>
                <LayoutCom3 />
            </TabPane>
        </Tabs>
        </>
    )
}

export default LayoutComponents;