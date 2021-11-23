import React, {useEffect, useRef, useState} from 'react';

import Map from "../../Map";
import styles from "../../../../styles/Home.module.css";

import {
    SearchViewSection,
    SearchResultInfo,
    SearchViewContainer,
    SearchViewMapContainer,
} from "./PropertySearchView.styles";
import {Property} from "../../../../models/property";
import PropertiesList from "../PropertiesList/PropertiesList";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import {H2} from "../../../../styles/typography.styles";
import {useMapEvents} from "react-leaflet";
import PropertyCard from "../PropertyCard/PropertyCard";


const PropertySearchView: React.FC<{ properties: Property[], isLoading: boolean }> = (props) => {
    const [center, setCenter] = useState([-33.873822661608735, 151.21692722341777]);

    useEffect(() => {
        if (props.properties.length > 0)
            setCenter([props.properties[0].lat, props.properties[0].lng])
    }, []);


    return (
        <SearchViewSection>
            <SearchResultInfo>
                <H2>Properties in selected map area.</H2>
                <p>You fond {props.properties.length} properties in this area.</p>
            </SearchResultInfo>
            <SearchViewContainer>
                {props.isLoading && <LoadingSpinner/>}
                {!props.isLoading && <PropertiesList properties={props.properties}/>}
            </SearchViewContainer>
            <SearchViewMapContainer>
                {!props.isLoading && <Map className={styles.homeMap} center={center} zoom={12}>
                    {({TileLayer, Marker, Popup}: { TileLayer: any; Marker: any; Popup: any }) => (
                        <>
                            <TileLayer
                                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YhkfKQ9hWgjtf37HhvXm"
                                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                            />
                            {props.properties.map(property => {
                                const propertyPin = [property.lat, property.lng];
                                console.log('Property coordinates: ', propertyPin);
                                return (
                                    <Marker key={property.id} position={propertyPin}>
                                        <Popup>
                                            <PropertyCard key={Math.random()} property={property}/>
                                        </Popup>
                                    </Marker>
                                )
                            })
                            }
                        </>
                    )}
                </Map>}
                {props.properties.length === 0 && <LoadingSpinner/>}

            </SearchViewMapContainer>
        </SearchViewSection>

    )

}

export default PropertySearchView;


// <SearchViewMapContainer>
//     {!props.isLoading && props.properties.length > 0 && <Map className={styles.homeMap} center={[props.properties[0].lat, props.properties[0].lng]} zoom={11}>
//         {({TileLayer, Marker, Popup}: { TileLayer: any; Marker: any; Popup: any }) => (
//             <>
//                 <TileLayer
//                     url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YhkfKQ9hWgjtf37HhvXm"
//                     attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//                 />
//                 {props.properties.map(property => {
//                     const propertyPin = [property.lat, property.lng];
//                     console.log('Property coordinates: ', propertyPin);
//                     return (
//                         <Marker key={property.id} position={propertyPin}>
//                             <Popup>
//                                 A pretty CSS3 popup. <br/> Easily customizable.
//                             </Popup>
//                         </Marker>
//                     )
//                 })
//                 }
//             </>
//         )}
//     </Map>}
//     {props.properties.length === 0  && <LoadingSpinner/>}
//
// </SearchViewMapContainer>
