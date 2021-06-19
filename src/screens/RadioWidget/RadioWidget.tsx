import styles from './RadioWidget.module.css';
import WidgetTopBar from './WidgetTopBar';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';

const RadioWidget = () => {
    return (
        <div className={styles.wrapper}>
            <WidgetTopBar />
            <WidgetContent />
            <WidgetFooter station="Dribble FM"/>
        </div>
    )
}

export default RadioWidget;
