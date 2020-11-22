import {
    Col as AntCol,
    ColProps as AntColProps,
    ColSize as AntColSize,
} from 'antd/es/grid/index';
import styled from 'styled-components';

const Col = (styled(AntCol)`
    background-color: red;
` as any) as typeof AntCol;

export type ColProps = AntColProps;
export type ColSize = AntColSize;

export default Col;
