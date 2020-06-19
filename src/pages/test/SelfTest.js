import React from 'react'
import { Table, Badge, Menu, Dropdown } from 'antd'
import { List, Typography } from 'antd';
import TreeComponent from './components/TreeComponent'
import style from  './style.less'

const source = [
    {
        key: 1,
        name: `aaa`,
        newData: `aa`,
        oldData: `a`,
    },
    {
        key: 2,
        name: `bbb`,
        newData: `bb`,
        oldData: `b`,
    }
]
const TableList = () => {

    return (
        <List  style={{width: 200}}
            size="small"
            header={<div className="list-header">
                <span>字段名称</span>
                <span>新值</span>
                <span>旧值</span>
            </div>}
            dataSource={source}
            renderItem={item => (
                <List.Item>
                   <span>{item.name}</span> 
                   <span>{item.newData}</span> 
                   <span>{item.oldData}</span> 
                </List.Item>
            )}
        />
    )
}

const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);
let remoteData = [];
    function getDatas (parm) {
            for (let i=0; i<3;i++){
                remoteData.push({
                    key: i,
                    name: `xxxxxxx${parm}`,
                    newData: `dddsadfsfsdsfdsfsdfdsfdsgdfgdfgfdgdgfdgfdgfdddd${parm}`,
                    oldData: `upgraded: 56${parm}`,
                });
            }
    }
      
       
function NestedTable() {
    const expandedRowRender = (record) => {
        const columns = [
            { title: '字段名称', dataIndex: 'name', key: 'name'},
            { title: '新值', dataIndex: 'newData', key: 'newData'},
            { title: '旧值', dataIndex: 'oldData', key: 'oldData' },
        ];
        if(record.key == 1) {
            return null
        }
        return <Table columns={columns} dataSource={remoteData} pagination={false} />
        // return <TableList />
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name', ellipsis: true},
        { title: 'Platform', dataIndex: 'platform', key: 'platform' },
        { title: 'Version', dataIndex: 'version', key: 'version' },
        { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        { title: 'Creator', dataIndex: 'creator', key: 'creator' },
        { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
        { title: 'Action', key: 'operation', fixed: 'right', render: () => <a>Publish</a> },
    ];
    const data = [];
    for (let i = 0; i < 3; i++) {
      data.push({
        key: i,
        name: 'Screemcdsfcdsfdsf发生的发生的辅导书辅导书大概多少个多少个个电视柜电视柜',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      });
    }
    
    return (
        <>
        <Table 
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={ (record) => expandedRowRender(record) }
            dataSource={data}
            rowClassName={record => record.key == 1 && `${style.noExpand}`}
            expandRowByClick={true}
            onExpand = {(expanded, record) => {
                console.log(expanded, record)
                
                    remoteData = [];
                    getDatas(record.key);
                
               
            }}
        />
        <TreeComponent />
        </>
    )
}


const SelfTest = () => {
    return (
        <div>
            {/* <TableList/> */}
            <NestedTable />
        </div>
    )
}

export default SelfTest