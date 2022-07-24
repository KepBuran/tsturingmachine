import {AssetsHelper} from "./AssetsHelper";

export class Animations {
    static readonly clickAnimation = (element :HTMLInputElement, clickAnimationTime: number = 100, imageWidthShrink: number = 0.6, imageHeightShrink: number = 0.6) => {

        let originalImage : string | null = element.getAttribute('src');
        if (originalImage) {
            element.setAttribute('src', AssetsHelper.activatedIconsDictionary[originalImage]);
            // @ts-ignore
            setTimeout(() => element.setAttribute('src', originalImage), clickAnimationTime);
        }

        element.style.width =  (element.offsetWidth*imageWidthShrink).toString()+"px";
        setTimeout(() => element.style.width = "", clickAnimationTime);
        element.style.height =  (element.offsetHeight*imageHeightShrink).toString()+"px";
        setTimeout(() => element.style.height = "", clickAnimationTime);
    }
}