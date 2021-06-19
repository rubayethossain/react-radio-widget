import { BACK_ARROW_ICON, SWITCH_ICON } from '../../../assets';
import { IconButton } from '../../../components/Buttons';
import styles from './WidgetTopBar.module.css';

const WidgetTopBar = () => {
    const clickHandler = () => {};
    return (

        <div className={styles.wrapper}>        
            <IconButton icon={BACK_ARROW_ICON} onClick={clickHandler} height="28px"/>

            <p className={styles.title}>STATIONS</p>
            
            <IconButton icon={SWITCH_ICON} onClick={clickHandler} height="28px"/>
        </div>
    )
}

export default WidgetTopBar
