import React from 'react'
import { Menu, Icon, Button, Switch } from 'antd'

const { SubMenu } = Menu;

class Menu2 extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click', e);
        this.setState({
            current: e.key,
        })
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="mail"/>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />
                    Navigation Two2
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                            Navigation Three - sub
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a>Nav</a>
                </Menu.Item>
            </Menu>
        )
    }
};
export default Menu2;

class Sider extends React.Component {
    rootSubmenuKeys = [ 'sub1', 'sub2', 'sub4' ]
    state = {
        collapsed: false,
        openKeys: ['sub1'],
        theme: 'dark'
    }
    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light'
        })
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    handleClick = e => {
        console.log('clicks', e);
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) == -1);
        if(this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            })
        }
    }
    render() {
        return (
            <div style={{ width: 256}}>
               <Button type="primary"
                onClick={this.toggleCollapsed} 
                style={{ marginBottom: 16}}
                >
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Switch 
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
             <Menu
                theme={this.state.theme}
                onClick={this.handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={this.state.collapsed}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                <SubMenu 
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail"/>
                            <span>NavigationOne</span>
                        </span>
                    }
                >
                    <Menu.ItemGroup key='g1' title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Optiojn 3</Menu.Item>
                        <Menu.Item key="4">Optiojn 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu 
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore"/>
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key='sub3' title="Subme">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <Icon type="setting" />
                            <span>Three</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                </SubMenu>
            </Menu>
            </div>
           
                )
    }
}
export {Sider}