import React from 'react'
import { Pagination } from 'antd'

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize)
}
function onChange(pageNumber) {
    console.log('Page: ', pageNumber)
}
export const PageCom = () => {
    return (
        <Pagination defaultCurrent={1} total={500}
        size="small"
            showSizeChanger
            showQuickJumper
            onChange={onChange}
            onShowSizeChange={onShowSizeChange}
        />
    )
}


export const SimplePage = () => {
    return (
        <Pagination simple defaultCurrent={2} total={50} />
    )
}


class PageCom2 extends React.Component {
    state = {
        current: 2
    };

    onChange = page => {
        console.log(page);
        this.setState({
            current: page
        })
    }
    render() {
        return <Pagination 
            current={this.state.current}
            onChange={this.onChange}
            total={50}
            showTotal = {total => `Total ${total} items`}
        />
    }
}
export const PageCom3 = () => {
    const itemRender = (current, type, originalElement) => {
        if(type=="prev"){
            return <a>上一页</a>
        }
        if(type=="next"){
            return <a>下一页</a>
        }
        return originalElement;
    }
    return (
        <Pagination total={500} itemRender={itemRender} />
    )
}

export {PageCom2}