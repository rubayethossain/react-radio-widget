import styles from './RadioWidget.module.css';
import WidgetTopBar from './WidgetTopBar';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import * as React from 'react';
import { Station } from './types';
import useFetchStations from '../../hooks/useFetchStations';

const INITIAL_STATION: Station = {
    id: null,
    frequency: '',
    name: '',
};

const RadioWidget = () => {
    const [activeStation, setActiveStation] = React.useState<Station>(
        Object.assign({}, INITIAL_STATION)
    );

    const {stations} = useFetchStations(null);

    return (
        <div className={styles.wrapper}>
            <WidgetTopBar />
            <WidgetContent
                stationsList={stations}
                activeStation={activeStation}
                setActiveStation={setActiveStation}
            />
            <WidgetFooter station={activeStation.name} />
        </div>
    );
};

export default RadioWidget;
