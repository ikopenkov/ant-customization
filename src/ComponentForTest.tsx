import { Button, List } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const ComponentForTest = () => {
    return (
        <Container>
            <Button tooltipTitle="Tooltip">Customized button</Button>
            <List
                grid={{ column: 2 }}
                dataSource={['Item 1', 'Item 2']}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Button loading>Loading</Button>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        margin-bottom: 20px;
    }
`;
