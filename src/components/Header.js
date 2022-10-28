import React, { useState, useEffect } from "react";

export default function Header() {

    const words = ["Coder", "Developer", "Programmer"];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
            return;
        }

        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 700 :
            150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <>
            <div className="App-header borderBottom">
                <div className='d-flex justify-content-around align-items-center'>
                    <img src={process.env.REACT_APP_WEB_LOGO_ROUND} className="App-logo" alt="logo" />
                    <div className='d-flex flex-column justify-content-center align-items-center headZoom'>
                        <img src={process.env.REACT_APP_WEB_LOGO} className="imageName" alt="logo" />
                        <span className='text-truncate' style={{ fontFamily: 'monospace', position: 'absolute', paddingTop: '8rem' }}> <small>{'<> '}</small>The {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`} <small>{'</>'}</small> </span>
                    </div>
                    <img src={process.env.REACT_APP_WEB_LOGO_ROUND} className="App-logo" alt="logo" />
                </div>

                <div className="p-2 text-center">
                    <p className="padding">
                        Effective, team-driven professional offering 3+ years of experience in the development of software for an industry where human efforts are optimised by SaaS Applications.<br />
                        Focused and committed, with a calm demeanour in the most challenging situations.
                        Seeking an engaging position to provide top-notch solutions as part of a progressive team.<br />
                        A passionate leader with the ability to lead winning, effective teams. Seeking the opportunity to support stakeholders' projects and requirements.
                    </p>
                </div>
            </div>
        </>
    )
}