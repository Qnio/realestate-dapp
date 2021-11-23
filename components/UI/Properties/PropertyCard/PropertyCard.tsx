import React from "react";
import Image from "next/image";
import Link from "next/link"

import {PrimaryLink} from "../../../../styles/links.styles";
import {Property} from "../../../../models/property";
import {BiBed, BiBath, BiCar, BiArea} from "react-icons/bi"
import {
    PropertyCardStyle,
    PropertyGallery,
    PropertyData,
    PropertyPricing,
    PropertyDetails,
    PropertyAddress,
    AddressStreet,
    AddressCity, IconAndDAtaPresentation, PropertyType

} from "./PropertyCard.styles";
import {H4, ShortSeparatorLine} from "../../../../styles/typography.styles";
import {CustomButton} from "@components/UI/shared";

const PropertyCard: React.FC<{ property: Property }> = (props) => {
    return (
        <PropertyCardStyle>
            <PropertyGallery>
                <Image src={props.property.photos[0]} alt="description" width='300' height='200'
                       layout='responsive'/>
            </PropertyGallery>

            <PropertyData>
                <PropertyAddress>
                    <AddressStreet>
                        <H4>U {props.property.unit}, {props.property.streetNumber} {props.property.streetName} {props.property.streetType}</H4>

                    </AddressStreet>
                    <AddressCity>
                        <p>{props.property.city}, {props.property.state}</p>
                    </AddressCity>
                    <ShortSeparatorLine/>
                </PropertyAddress>

                <PropertyDetails>
                    <IconAndDAtaPresentation>
                        <BiBed/>
                        <p>{props.property.bedrooms}</p>
                    </IconAndDAtaPresentation>
                    <IconAndDAtaPresentation>
                        <BiBath/>
                        <p>{props.property.bathrooms}</p>
                    </IconAndDAtaPresentation>
                    <IconAndDAtaPresentation>
                        <BiCar/>
                        <p>{props.property.carSpace}</p>
                    </IconAndDAtaPresentation>
                    <IconAndDAtaPresentation>
                        <BiArea/>
                        <p>{props.property.space}</p>
                    </IconAndDAtaPresentation>
                </PropertyDetails>
                <PropertyType>
                    <p>{props.property.type}</p>
                </PropertyType>
                <PropertyPricing>
                    <H4>{props.property.sellType}</H4>
                    <p>Price: ${props.property.price}</p>
                    <Link href={`/property/view/${props.property.id}`} passHref>
                        <PrimaryLink>More info</PrimaryLink>
                    </Link>
                </PropertyPricing>
            </PropertyData>

        </PropertyCardStyle>
    )
}

export default PropertyCard;
