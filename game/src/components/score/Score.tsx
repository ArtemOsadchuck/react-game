import React from 'react';
// import ReactDOM from 'react-dom';

export interface Iscore {
    jj: string
}

export const Score: React.FC = () => {
    const react: Iscore = {
        jj: 'React TS'
    };

    return (
        <div>
            <h1>score</h1>
        </div>
    );
}