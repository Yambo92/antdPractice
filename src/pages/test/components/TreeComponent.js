import React, {useState} from 'react'
import {Tree} from 'antd'

const { TreeNode} = Tree;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;
    const children = [];
    for(let i=0; i<x;i++) {
        const key=`${preKey}-${i}`;
        tns.push({ title: key, key});
        if (i < y) {
            children.push(key)
        }
    }
    if(_level < 0){
        return tns;
    }
    const level = _level -1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children)
    });
};

// generateData(z);

const treeDatas = [
    {
      title: '一级标题01',
      key: '0-0',
      pID: 0,
      id: 0,
      children: [
        {
          title: '二级标题01',
          key: '0-0-0',
          pID: 0,
          children: [
            { title: '三级标题01', key: '0-0-0-0' },
            { title: '三级标题02', key: '0-0-0-1' },
            { title: '三级标题03', key: '0-0-0-2' },
          ],
        },
        {
          title: '二级标题02',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '二级标题03',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '一级标题02',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '一级标题03',
      key: '0-2',
    },
  ];

const TreeComponent = () => {

    const [treeData, setTreeData] = useState(treeDatas);
    const [expandedKeys, setExpandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0'])

    const onDragEnter = info => {
        console.log(info)
    }

    const onDrop = info => {
        console.log(info)
    }

    const loop = data => 
        data.map(item => {
            if (item.children && item.children.length) {
                return (
                    <TreeNode key={item.key} title={item.title}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.title} />
        })

    return (
        <Tree 
            className="draggable-tree"
            defaultExpandedKeys={expandedKeys} //默认展开指定的树节点
            draggable // 设置节点可拖拽
            blockNode //是否节点占据一行
            onDragEnter={onDragEnter} //dragenter 触发时调用
            onDrop={onDrop} //drop触发时调用
        >
            {loop(treeData)}
        </Tree>
    )
}

export default TreeComponent;