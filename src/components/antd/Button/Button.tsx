import { Tooltip } from 'antd';
import AntButton, { ButtonProps as AntButtonProps } from 'antd/es/button/index';
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled(AntButton)`
    background-color: red;
`;

export type ButtonProps = AntButtonProps & {
    tooltipTitle?: React.ReactNode;
};

const Button = ({ tooltipTitle, ...props }: ButtonProps) => {
    const button = <ButtonStyled {...props} />;
    if (tooltipTitle) {
        return <Tooltip title={tooltipTitle}>{button}</Tooltip>;
    }
    return button;
};

export default Button;
