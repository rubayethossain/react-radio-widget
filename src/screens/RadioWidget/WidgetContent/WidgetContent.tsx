import RadioStation from '../../../components/RadioStation';
import { Station } from '../types';
import styles from './WidgetContent.module.css';
import { Scrollbar } from "react-scrollbars-custom";

type Props = {
    stationsList: Station[];
    activeStation: Station;
    setActiveStation: (station: Station) => void;
};

const WidgetContent = (props: Props) => {
    const { stationsList, activeStation, setActiveStation } = props;

    const handleActiveStation = (station: Station) => {
        if(station.id !== activeStation.id){
            setActiveStation(station);
        }
    }

    const list = stationsList.map((station, key) => (
        <li key={key} className={styles.station} onClick={() => handleActiveStation(station)}>
            <RadioStation
                id={station.id}
                name={station.name}
                frequency={station.frequency}
                activeStation={activeStation ? activeStation.id : null}
            />
        </li>
    ));

    return (
        <Scrollbar className={styles.wrapper}>
            <ul className={styles.stationList}>{list}</ul>
        </Scrollbar>
    );
};

export default WidgetContent;
