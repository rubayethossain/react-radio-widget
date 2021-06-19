import styles from './RadioWidget.module.css';
import WidgetTopBar from './WidgetTopBar';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';

const STATIONS = [
    {
        id: 1,
        name: 'Putin FM',
        frequency: '66,6'
    },
    {
        id: 2,
        name: 'Dribble FM',
        frequency: '101,2'
    },
    {
        id: 3,
        name: 'Doge FM',
        frequency: '99,4'
    },
    {
        id: 4,
        name: 'Ballads FM',
        frequency: '87,1'
    },
    {
        id: 5,
        name: 'Maximum FM',
        frequency: '142,2'
    }
]

const RadioWidget = () => {
    return (
        <div className={styles.wrapper}>
            <WidgetTopBar />
            <WidgetContent stationsList={STATIONS} />
            <WidgetFooter station="Dribble FM"/>
        </div>
    )
}

export default RadioWidget;
