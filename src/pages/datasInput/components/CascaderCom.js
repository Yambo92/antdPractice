import React from 'react'
import { Cascader } from 'antd'
import { extend } from 'lodash'

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'jinangsu',
        disabled: true,
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong hua men'
                    }
                ]
            }
        ]
    }
]

export const CascaderCom = () => {
    const onChange = value => {
        console.log(value)
        
    }
    return (
        <Cascader 
            size="small"
            defaultValue={['zhejiang', 'hangzhou']}
            options={options}
            onChange={onChange} />
    )
}

export class CascaderCom2 extends React.Component {
    state = {
        text: 'Unselect'
    };
    onChange = (value, selectedOptions) => {
        this.setState({
            text: selectedOptions.map(o => o.label).join(', ')
        });
    };

    render() {
        return (
            <span>
                {this.state.text}
                &nbsp;
                <Cascader options={options} onChange={this.onChange}>
                    <a>Chaneg City</a>
                </Cascader>
            </span>
        )
    }
}

export class LasyOptions extends React.Component {
    options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            isLeaf: false,
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            isLeaf: false,
        },
    ]
    state = {
        options: this.options
    };
    onChange = (value, selectedOptions) => {
        debugger;
        console.log(value, selectedOptions)
    }
    loadData = selectedOptions => {
        debugger;
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;

        //load options lazily
        setTimeout(() => {
            targetOption.loading = false;
            targetOption.children = [
                {
                    label: `${targetOption.label} Dynamic 1`,
                    value: 'dynamic1'
                },
                {
                    label: `${targetOption.label} Dynamic 2`,
                    value: 'dynamic2'
                }
            ];
            this.setState({
                options: [...this.state.options]
            })
        }, 1000)
    }
    render() {
        return (
            <Cascader 
                options={this.state.options}
                loadData={this.loadData}
                onChange={this.onChange}
                changeOnSelect
            />
        )
    }

}