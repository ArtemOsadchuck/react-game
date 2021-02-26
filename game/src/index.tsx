import React from 'react';
import ReactDOM from 'react-dom';
// import style from './style.css';

interface Iint {
    jj: string
}
const App: React.FC = () => {
    const react: Iint = {
        jj: 'React TS'
    };

    return (
    <>
        <h1>Hay</h1>
        <div>{react.jj}</div>
    </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
