import RadioStation from '../../../components/RadioStation';
import { Station } from '../types';
import styles from './WidgetContent.module.css';

type Props = {
    stationsList: Station[];
};
const WidgetContent = (props: Props) => {
    const { stationsList } = props;

    return (
        <div className={styles.wrapper}>
            <ul className={styles.stationList}>
                {stationsList.map((station, key) => (
                    <li key={key} className={styles.station}>
                        <RadioStation {...station} activeStation={0} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetContent;
