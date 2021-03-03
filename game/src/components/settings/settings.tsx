import React, { useRef } from 'react';

export interface Isettings {
    value: any
    isplatngEffects: boolean
    changeIsSudioProp: Function
}

export const Settings: React.FC<Isettings> = (props) => {
    const audRef = props.value.current;
    let noPlay: boolean = false;
    const play = (): void => {
        if (!noPlay) audRef.play()
        if (noPlay) audRef.pause()
        noPlay = !noPlay;
    };

    return (
        <div>
            <h1>Settings</h1>
            <button className="btn waves-effect waves-light brown darken-1" onClick={() => play()}>music</button>
            <div>
                <h5>Effects</h5>
                <form action="#" >
                    <p>
                        <label>
                            <input name="group2" value='10' type="radio" defaultChecked={props.isplatngEffects}
                                onChange={() => props.changeIsSudioProp(true)} />
                            <span className='select_time'>On</span>
                        </label>
                        <label>
                            <input name="group2" type="radio"
                                onChange={() => props.changeIsSudioProp(false)} defaultChecked={!props.isplatngEffects} />
                            <span className='select_time'>Off</span>
                        </label>
                    </p>
                </form>
            </div>
        </div>
    );
};
