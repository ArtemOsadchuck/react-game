import React from 'react';
// import ReactDOM from 'react-dom';

export interface Iheader {
    jj: string
}

export const Header: React.FC = () => {
    const react: Iheader = {
        jj: 'React TS'
    };

    return (
    <>
        <h1>Hay</h1>
        <div>{react.jj}</div>
    </>
    );
}