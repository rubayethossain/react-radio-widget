import styles from './RadioWidget.module.css';
import WidgetTopBar from './WidgetTopBar';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import * as React from 'react';
import { Station } from './types';

const STATIONS = [
    {
        id: 1,
        name: 'Putin FM',
        frequency: '66,6',
    },
    {
        id: 2,
        name: 'Dribble FM',
        frequency: '101,2',
    },
    {
        id: 3,
        name: 'Doge FM',
        frequency: '99,4',
    },
    {
        id: 4,
        name: 'Ballads FM',
        frequency: '87,1',
    },
    {
        id: 5,
        name: 'Maximum FM',
        frequency: '142,2',
    },
];

const INITIAL_STATION: Station = {
    id: null,
    frequency: '',
    name: '',
};

const RadioWidget = () => {
    const [activeStation, setActiveStation] = React.useState<Station>(
        Object.assign({}, INITIAL_STATION)
    );

    return (
        <div className={styles.wrapper}>
            <WidgetTopBar />
            <WidgetContent
                stationsList={STATIONS}
                activeStation={activeStation}
                setActiveStation={setActiveStation}
            />
            <WidgetFooter station={activeStation.name} />
        </div>
    );
};

export default RadioWidget;
