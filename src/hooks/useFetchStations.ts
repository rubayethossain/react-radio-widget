import * as React from 'react';
import { Station } from '../screens/RadioWidget/types';

const DEFAULT_STATIONS = [
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

const useFetchStations = (stationEndpoint: string | null | '') => {
    const [stations, setStations] = React.useState<Station[]>(DEFAULT_STATIONS);

    React.useEffect(() => {
        const fetchStations = async (endpoint: string) => {
            try {
                const req = await fetch(endpoint, { method: 'GET' });
                const res = await req.json();

                if(Array.isArray(res) && res.length){
                    const stations = res.map((s) => ({
                        id: s.id,
                        name: s.name,
                        frequency: s.frequency
                    }))
                    
                    setStations(stations);
                }
            } catch (error) { console.log({ error })}
        };

        if (stationEndpoint) fetchStations(stationEndpoint);
    }, [stationEndpoint]);

    return { stations };
};

export default useFetchStations;
