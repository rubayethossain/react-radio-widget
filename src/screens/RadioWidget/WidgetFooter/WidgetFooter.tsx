import { Fragment } from 'react';
import { StationName } from '../../../components/Typography';
import styles from './WidgetFooter.module.css';

type Props = {
    station: string | "" | null
}

const WidgetFooter = (props: Props) => {
    const { station } = props;

    return (
        <div className={styles.wrapper}>
            { station && (
                <Fragment>
                    <p className={styles.title}><strong>Currently Playing</strong></p>
                    <StationName>{station}</StationName>
                </Fragment>)}
        </div>
    )
}

export default WidgetFooter
