import React from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
// import ReactDOM from 'react-dom';

export interface Iint {
    jj: string
}
export const App: React.FC = () => {
    const react: Iint = {
        jj: 'React TS'
    };

    return (
       <div className='container'>
           <Header />
           
           <Footer />
       </div>
    );
}