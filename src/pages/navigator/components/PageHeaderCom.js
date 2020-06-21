import React from 'react'
import { PageHeader,  Button, Descriptions, Dropdown, Icon, Menu, Tag, Typography, Row} from 'antd'

export const PageHeaderCom = () => {

    return (
        <div 
            style={{
                backgroundColor: '#f5f5f5',
                padding: 24
            }}
        >
            <PageHeader 
            ghost={false}
                style={{
                    border: '1px solid rgb(235,237,240)'
                }}
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>
                ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Association">
                        <a>424242</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017</Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    )
}

const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu'
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu'
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu'
    }
]

export const PageHeaderCom2 = () => {
    return (
        <>
        <PageHeader 
            style={{
                border: '1px solid rgb(235,237,240)'
            }}
            title="Title"
            breadcrumb={{ routes }}
            subTitle="This s  a subtitle"
        />
        </>
    )
}

const { Paragraph } = Typography

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">2st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">3st menu item</a>
        </Menu.Item>
    </Menu>
)

const DropdownMenu = () => {
    return (
        <Dropdown key="more" overlay={menu}>
            <Button 
                style={{
                    border: 'none',
                    padding: 0
                }}
            >
                <Icon type="ellipsis" 
                    style={{
                        fontSize:20,
                        verticalAlign: 'top',
                    }}
                />
            </Button>
        </Dropdown>
    )
}

const IconLink = ({src, text}) => (
    <a
        style={{
            marginRight: 16,
            display: 'flex',
            alignItems: 'center'
        }}
    >
        <img 
            style={{
                marginRight: 8
            }}
            src={src}
            alt="start"
        />
        {text}
    </a>
);

const content = (
    <div className="content">
        <Paragraph>
        Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system
        </Paragraph>
        <Row className="contentLink" type="flex">
            <IconLink 
            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
            text="Quick Start"
            />
        </Row>
    </div>
)

const Content = ({ children, extraContent}) => {
    return (
        <Row className="content" type="flex">
            <div className="main" style={{ flex: 1}}>
                {children}
            </div>
    <div className="extra" style={{ marginLeft: 80}}>{extraContent}</div>
        </Row>
    )
}

export const PageHeaderCom3 = () => {
    return (
        <>
            <PageHeader
                title="Title"
                style={{ border: '1px solid rgb(235,237,240)' }}
                subTitle="This is a subtitle"
                tags={<Tag color="blue">Running</Tag>}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <DropdownMenu key="more" />,
                ]}
                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                breadcrumb={{ routes }}
            >
                <Content
                    extraContent={
                        <img
                        src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                        alt="content"
                        />
                    }
                    >
                        {content}
                    </Content>
            </PageHeader>
        </>
    )
}