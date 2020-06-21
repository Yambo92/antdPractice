import React from 'react'
import { Menu, Dropdown, Icon, message, Button } from 'antd'

const { SubMenu } = Menu;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                2st menu item
            </a>
        </Menu.Item>
    </Menu>
)
const menu2 = (
    <Menu>
        <Menu.Item key='1'>
            <a target="_blank" rel="noopener noreferrer" href="#">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item key='2'>
            <a target="_blank" rel="noopener noreferrer" href="#">
                2st menu item
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
            3rd menu item (disabled)
        </Menu.Item>
    </Menu>
)
export const MenuCom = () => {
    return (
        <>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>
            <Dropdown overlay={menu2}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>
        </>
    )
}

const onClick = ({key}) => {
    message.info(`Click on item ${key}`)
}

const menu3 = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2st menu item</Menu.Item>
        <Menu.Item key="3">3st menu item</Menu.Item>
    </Menu>
)

export const MenuCom2 = () => {
    return (
        <Dropdown overlay={menu3} trigger={['click']}>
           <a>
               clickeme
           </a>
        </Dropdown>
    )
}

const menu4 = (
    <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2st menu item</Menu.Item>
        <SubMenu title="sub menu">
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4rd menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu Item</Menu.Item>
        </SubMenu>
    </Menu>
)

export const MenuCom3 = () => {
    return (
        <Dropdown overlay={menu4}>
            <a>hover me 多层</a>
        </Dropdown>
    )
}

export const MenuCom4 = () => {
    return (
        <Dropdown overlay={menu} trigger={['contextMenu']}>
            <div 
                style={{
                    textAlign: 'center',
                    background: '#f7f7f7',
                    height: 200,
                    lineHeight: '200px',
                    color: '#777'
                 }}
            >
                Right click on here
            </div>
        </Dropdown>
    )
}

export const MenuCom5 = () => {
    return (
        <div>
            <Dropdown 
                overlay={menu} placement="bottomLeft"
            >
                <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
            </Dropdown>
        </div>
    )
}

export const MenuCom6 = () => {
    const handleButtonClick = (e) => {
        message.info('Click on left button')
    }
    const handleMenuClick = e =>{
        message.info('Click on menu item')
    }
    return (
        <div id="components-dropdown-demo-dropdown-button">
            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
            Dropdown
            </Dropdown.Button>
            <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
                夏利
            </Dropdown.Button>
        </div>
    )
}