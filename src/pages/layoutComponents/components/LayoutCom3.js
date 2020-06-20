import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Content, Footer, Sider } = Layout;
const LayoutCom3 = () => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
        <>
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight:'64px' }}
                    >
                        <Menu.Item key="1">nav1</Menu.Item>
                        <Menu.Item key="2">nav2</Menu.Item>
                        <Menu.Item key="3">nav3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}
                        trigger={null}
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken)
                        }}
                        collapsible collapsed={collapsed}
                        // onCollapse={(collapsed) => setCollapsed(collapsed)}
                    >
                        <Menu 
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user"/>
                                        subnav 1
                                    </span>
                                }
                            >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="laptop"/>
                                        subnav2
                                    </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding:'0 24px 24px' }}>
                        <Header style={{background:'#fff', padding:0}}>
                            <Icon 
                                className="trigger"
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={() => {
                                    setCollapsed(!collapsed)
                                }}
                            />
                        </Header>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight:280
                            }}
                        >Content</Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutCom3;