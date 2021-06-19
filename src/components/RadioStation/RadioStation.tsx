import { MINUS_ICON, PLUS_ICON, STATION_ICON } from '../../assets';
import { Station } from '../../screens/RadioWidget/types';
import { IconButton } from '../Buttons';
import { StationName } from '../Typography';
import styles from './RadioStation.module.css';

type Props = Station & {    
    activeStation: number | null | undefined
}

const RadioStation = (props: Props) => {
    const {id, frequency, name, activeStation} = props;

    const clickHandler = () => {};

    const stationPlayer = (
        <div className={styles.player}>
            <IconButton icon={PLUS_ICON} onClick={clickHandler}/>
            <img src={STATION_ICON} alt="" />
            <IconButton icon={MINUS_ICON} onClick={clickHandler}/>
        </div>
    )

    return (
        <section>
            {activeStation === id && stationPlayer}
            <div className={styles.radio}>
                <StationName>{name}</StationName>
                <StationName>{frequency}</StationName>
            </div>
        </section>
    )
}

export default RadioStation

