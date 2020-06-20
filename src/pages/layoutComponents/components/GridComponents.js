import React from 'react'
import { Row, Col } from 'antd';
import styles from '../styles.less'

const DemoBox = props => <p className={`height-${props.value}`} style={{ height: `${props.value}px`, backgroundColor: `#3e75ff` }}>{props.children}</p>;

const GridComponents = () => {
    return (
        <>
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
            </div>
            <div className={styles['gutter-example']}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                </Row>
                <Row gutter={[{xs:8, sm:16, md:24, lg:32}, 20]}>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles["gutter-box"]}>col-6</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8} offset={8}>offset-col-8</Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        col-12 col-offset-6
                    </Col>
                </Row>
                <Row>
                    <Col span={18} push={6}>
                        col-6-push-6
                    </Col>
                    <Col span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row>
            </div>
            <div>
                <p>sub-element align left</p>
                <Row type="flex" justify="start">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                </Row>
                <p>sub-element align center</p>
                <Row type="flex" justify="center">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                </Row>
                <p>sub-element align right</p>
                <Row type="flex" justify="end">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                </Row>
                <p>sub-element monspaced arrangment</p>
                <Row type="flex" justify="space-between">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                </Row>
                <p>sub-element align full</p>
                <Row type="flex" justify="space-around">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                </Row>
            </div>
            <div>
                <p>Align Top</p>
                <Row type="flex" justify="center" align="top">
                    <Col span={4}>
                        <DemoBox value={100}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={50}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={120}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={80}>col-4</DemoBox>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={4}>
                        <DemoBox value={100}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={50}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={120}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={80}>col-4</DemoBox>
                    </Col>
                </Row>
                <p>Align Bottom</p>
                <Row type="flex" justify="space-between" align="bottom">
                    <Col span={4}>
                        <DemoBox value={100}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={50}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={120}>col-4</DemoBox>
                    </Col>
                    <Col span={4}>
                        <DemoBox value={80}>col-4</DemoBox>
                    </Col>
                </Row>
            </div>
            <div>
                <Row type="flex">
                    <Col span={6} order={4}>
                        1 col-order-4
                    </Col>
                    <Col span={6} order={3}>
                        2 col-order-3
                    </Col>
                    <Col span={6} order={2}>
                        3 col-order-2
                    </Col>
                    <Col span={6} order={1}>
                        4 col-order-1
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>左侧</Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>中间</Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>右侧</Col>
                </Row>
            </div>
        </>
    )
}
export default GridComponents