import React from 'react'
import { Typography, Divider } from 'antd'

const { Title, Paragraph, Text } = Typography;

export const TypographyComponent = () => {
    const [str, setStr] = React.useState('This is an editable text')
    const onChange = str => {
        setStr(str)
    }
    return (
        <Typography>
            <Title>Introduction</Title>
            <Paragraph>
                   In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
                <Title level={2}>Guidlines and Resources</Title>
                <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved,(<Text code>Sketch</Text>) which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
                </Paragraph>
                  <Paragraph>
                      <Title level={4}>h4.Ant design</Title>
                      <ul>
                          <li>
                              <a>Princles</a>
                              <Text type="secondary">Antd</Text>
                              <Text type="warning">Antd</Text>
                              <Text disabled>antd</Text>
                              <Text mark>antds</Text>
                              <Text code>code</Text>
                              <Text underline>underLine</Text>
                              <Text delete>delete</Text>
                              <Text strong>strong</Text>
                          </li>
                          <li>
                              <a>Princles</a>
                          </li>
                          <li>
                              <a>Princles</a>
                          </li>
                      </ul>
                  </Paragraph>
            </Paragraph>
            <Paragraph editable={{ onChange: onChange }}>
                {str}
            </Paragraph>
            <Paragraph copyable>This is a copyable text</Paragraph>
            <Paragraph copyable={{ text: 'Hello, antd'}}>Replace copy text</Paragraph>
            <Paragraph ellipsis>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.
            </Paragraph>
            <Paragraph ellipsis={{ rows: 3, expandable:true }}>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.
            </Paragraph>
        </Typography>
    )
}