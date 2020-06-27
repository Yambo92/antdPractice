import { Upload, message, Button, Icon } from 'antd'
import React from 'react'

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if(info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if(info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded success`)
        } else if(info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed`)
        }
    },
    defaultFileList: [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/xxx.png'
        },{
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/yyy.png'
        }
    ]
}

export class UploadCom extends React.Component {
    state = {
        fileList: [
            {
                uid: '-1',
                name: 'yyy.png',
                status: 'done',
                response: 'Server Error 500',
                url: 'http://www.baidu.com/yyy.png'
            }
        ]
    }
    handleChange = info => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-2);

        fileList = fileList.map(file => {
            if(file.response) {
                file.url = file.response.url;
            }
            return file;
        })
        this.setState({ fileList })
    }
    render() {
        return (
            <div>
                <Upload {...props} fileList={this.state.fileList}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}