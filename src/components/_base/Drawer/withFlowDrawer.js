/* eslint-disable */
import React from 'react'
import { connect } from 'dva'
import Auditing from './Auditing';
import uuid from '../../../utils/uuid';

// 给组件绑定挂载时初始化审核悬浮框，卸载时，卸载悬浮框，切换时改变悬浮框数据的功能
const withFlowDrawer = func => Component => (
    connect(func)(
        class extends React.Component {
            static defaultProps = {
                params: { busId : null }
            }

            // 是否手动初始化
            isInitByHand = false

            togglerContent = () => {
                const { dispatch } = this.props;
                dispatch({ type: 'drawer/togglerContent', payload: { key: 'check'} })
            }
        }
    )
)