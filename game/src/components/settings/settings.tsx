import React, {useRef} from 'react';
// import ReactDOM from 'react-dom';

export interface Isettings {
    jj: string
}

export const Settings: React.FC = () => {
    const react: Isettings = {
        jj: 'React TS'
    };

    const audRef = useRef(null);
    // audRef.volume = 0.1;
    // audRef.volume = 0.1;
    console.log(audRef)
    let noPlay: boolean = false;
    const play = (): void => {
        noPlay = !noPlay;
        if (noPlay) audRef.current.play()
        if (!noPlay) audRef.current.pause()
    }


    return (
        <div>
            <h1>Settings</h1>
            {/* <audio ref={audRef} src="../../assets/sounds/led9.mp3" controls autoPlay ></audio> */}
            {/* <audio ref={audRef} src="../../assets/sounds/led9.mp3" controls autoPlay ></audio> */}
            <button onClick={play}>111</button>
            <audio ref={audRef} src="../../assets/sounds/led9.mp3"></audio>
        </div>
    );
}