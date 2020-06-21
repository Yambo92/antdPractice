import { Breadcrumb,Icon, Alert } from 'antd'


const BreadcrumbCom = () => {
    return (
        <>
        <Breadcrumb>
            <Breadcrumb.Item>
            <Icon type="home" />
            <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Applicaiton</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        </>
    )
}

export default BreadcrumbCom