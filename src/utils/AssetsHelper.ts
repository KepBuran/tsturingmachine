//TOOLBAR ICONS
import runIcon from '../assets/img/toolbar/run_button.png';
import runIconActivated from '../assets/img/toolbar/run_button_activated.png';
import pauseIcon from '../assets/img/toolbar/pause_button.png';
import pauseIconActivated from '../assets/img/toolbar/pause_button_activated.png';
import stopIcon from '../assets/img/toolbar/stop_button.png';
import stopIconActivated from '../assets/img/toolbar/stop_button_activated.png';
import saveIcon from '../assets/img/toolbar/save_button.png';
import saveIconActivated from '../assets/img/toolbar/save_button_activated.png'
import resetIcon from '../assets/img/toolbar/reset_button.png';
import resetIconActivated from '../assets/img/toolbar/reset_button_activated.png';
import clearIcon from '../assets/img/toolbar/clear_button.png';
import clearIconActivated from '../assets/img/toolbar/clear_button_activated.png';
import stepIcon from '../assets/img/toolbar/step_button.png';
import stepIconActivated from '../assets/img/toolbar/step_button_activated.png';
import firstStepIcon from '../assets/img/toolbar/first_state_button.png';
import firstStepIconActivated from '../assets/img/toolbar/first_state_button_activated.png';

export class AssetsHelper {
    static readonly iconsDictionary: { [key: string]: string } = {
        runIcon: runIcon,
        pauseIcon: pauseIcon,
        stopIcon: stopIcon,
        saveIcon: saveIcon,
        resetIcon: resetIcon,
        clearIcon: clearIcon,
        stepIcon: stepIcon,
        firstStateIcon: firstStepIcon
    }

    static readonly activatedIconsDictionary: { [key: string]: string } = {
        [runIcon]: runIconActivated,
        [pauseIcon]: pauseIconActivated,
        [stopIcon]: stopIconActivated,
        [saveIcon]: saveIconActivated,
        [resetIcon]: resetIconActivated,
        [clearIcon]: clearIconActivated,
        [stepIcon]: stepIconActivated,
        [firstStepIcon]: firstStepIconActivated
    }
}