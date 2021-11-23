import {useEffect, useRef} from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {

    const mapRef = useRef();

    let mapClassName = styles.map;

    if ( className ) {
        mapClassName = `${mapClassName} ${className}`;
    }

    useEffect(() => {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;
        console.log(map);

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: '/marker-icon-2x.png',
            iconUrl: '/marker-icon.png',
            shadowUrl: '/marker-shadow.png',
        });


    }, [mapRef]);

    return (
        <MapContainer className={mapClassName} {...rest}>
            { children(ReactLeaflet) }
        </MapContainer>
    )
}

export default Map;
