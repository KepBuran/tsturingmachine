import React from 'react';
import {Speed} from "../../models/Speed";

const SpeedComponent = () => {
    return (
        <li className="menuElement">Speed
            <ul className="subMenu speedSubMenu">
                <li data-speed={Speed.quarter}>0.25x</li>
                <li data-speed={Speed.half}>0.5x</li>
                <li data-speed={Speed.normal}>1x</li>
                <li data-speed={Speed.double}>2x</li>
                <li data-speed={Speed.four}>4x</li>
                <li data-speed={Speed.max}>Max</li>
                <li data-speed={Speed.beyondMax}>Beyond max</li>
            </ul>
        </li>
    );
};

export default SpeedComponent;