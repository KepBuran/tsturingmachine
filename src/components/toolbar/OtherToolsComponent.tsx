import React from 'react';
import {AssetsHelper} from "../../utils/AssetsHelper";
import {Animations} from "../../utils/Animations";

const OtherToolsComponent = () => {
    const stepMachine = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement);
        console.log("Step machine")
    }

    const toFirstState = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement);
        console.log("Firt")
    }


    return (
        <span className="toolsBlock">
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.stepIcon} onClick={stepMachine}/> </div>
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.firstStateIcon} onClick={toFirstState}/> </div>
        </span>
    );
};

export default OtherToolsComponent;