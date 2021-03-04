import React from 'react';

export interface Iweapon {
    weapon: string
};

export const Weapon: React.FC<Iweapon> = ({ weapon }) => {
    const imgSrc: string = `../../assets/${weapon}.png`
    return (
        <div className="container">
            <img className="weapon_img" src={imgSrc} alt="weapons" />
        </div>
    );
};
