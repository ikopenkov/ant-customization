import { render, screen } from '@testing-library/react';
import React from 'react';
import { ComponentForTest } from 'src/ComponentForTest';

describe('TestComponent', () => {
    render(<ComponentForTest />);
    it(`works and renders`, () => {
        expect(screen.getByTestId('container')).toBeTruthy();
        expect(screen.getByTestId('button')).toBeTruthy();
        expect(screen.getByTestId('list')).toBeTruthy();
    });
});
