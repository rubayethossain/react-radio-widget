import { BACK_ARROW_ICON, SWITCH_ICON } from '../../../assets';
import { IconButton } from '../../../components/Buttons';
import styles from './WidgetTopBar.module.css';

const WidgetTopBar = () => {
    return (
        <div className={styles.wrapper}>
            <IconButton icon={BACK_ARROW_ICON} onClick={() => console.log()} />
            <span>STATIONS</span>
            <IconButton icon={SWITCH_ICON} onClick={() => console.log()} />
        </div>
    )
}

export default WidgetTopBar
