import React, {FormEvent, useContext, useEffect, useState} from 'react';
import useInput from "../../../../Hooks/use-imput";
import {Input} from "@components/UI/shared";

import PropertyContext from "../../../../store/property-context";
import {
    AddFormWrapper,
    PropertyType,
    PropertyMarket,
    BedroomInput,
    BathroomInput,
    CarSpaceInput,
    PropertySpace,
    UnitNumber,
    StreetNumber,
    StreetName,
    StreetType,
    FormSubmitButton,
    PostCode,
    State,
    City,
    PictureUrl,
    Price, Description,
    PropertySellType
} from "./AddForm.styles";
import {Dropdown} from "@components/UI/shared";
import {CustomList} from "@components/UI/shared";
import {LocationList} from "../../SearchPropertiesBar/SearchBarNavForm/SearchBarNavForm.styles";
import {CustomButton}from "@components/UI/shared";
import {ErrorMessage} from "@components/UI/shared";


const AddForm: React.FC = () => {

    const {
        value: unitNumber,
        isValid: unitNumberIsValid,
        hasError: unitNumberHasError,
        valueChangeHandler: unitNumberChangeHandler,
        setInputIsTouched: unitNumberIsTouched,
        valueBlurHandler: unitNumberBlurHandler,
        clearInputValue: clearUnitNumberValue
    } = useInput((value: number | '') => (value > 0 && value < 20000) || value === '')

    const {
        value: bedroomsNumber,
        isValid: bedroomNumberIsValid,
        hasError: bedroomNumberHasError,
        valueChangeHandler: bedroomNumberChangeHandler,
        setInputIsTouched: bedroomNumberIsTouched,
        valueBlurHandler: bedroomNumberBlurHandler,
        clearInputValue: clearBedroomNumberValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        value: carSpaceNumber,
        isValid: carSpaceNumberIsValid,
        hasError: carSpaceNumberHasError,
        valueChangeHandler: carSpaceNumberChangeHandler,
        setInputIsTouched: carSpaceNumberIsTouched,
        valueBlurHandler: carSpaceNumberBlurHandler,
        clearInputValue: clearCarSpaceNumberValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        value: bathroomsNumber,
        isValid: bathroomNumberIsValid,
        hasError: bathroomNumberHasError,
        valueChangeHandler: bathroomNumberChangeHandler,
        setInputIsTouched: bathroomNumberIsTouched,
        valueBlurHandler: bathroomNumberBlurHandler,
        clearInputValue: clearBathroomNumberValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        value: propertySpace,
        isValid: propertySpaceIsValid,
        hasError: propertySpaceHasError,
        valueChangeHandler: propertySpaceChangeHandler,
        setInputIsTouched: propertySpaceIsTouched,
        valueBlurHandler: propertySpaceBlurHandler,
        clearInputValue: clearPropertySpaceValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        //initial value ''
        value: propertyStreetName,
        //initial value false
        hasError: streetNameHasError,
        //initial value false
        isValid: streetNameIsValid,
        valueChangeHandler: streetNameChangeHandler,
        valueBlurHandler: streetNameBlurHandler,
        setInputIsTouched: streetNameIsTouched,
        clearInputValue: clearStreetNameValue
    } = useInput((value: string) => value.trim() !== '');

    const {
        value: streetType,
        hasError: streetTypeHasError,
        isValid: streetTypeIsValid,
        valueChangeHandler: streetTypeChangeHandler,
        valueBlurHandler: streetTypeBlurHandler,
        setInputIsTouched: streetTypeIsTouched,
        clearInputValue: clearStreetTypeValue

    } = useInput((value: string) => value.trim() !== '')

    const {
        value: propertyStreetNumber,
        hasError: streetNumberHasError,
        isValid: streetNumberIsValid,
        valueChangeHandler: streetNumberChangeHandler,
        valueBlurHandler: streetNumberBlurHandler,
        setInputIsTouched: streetNumberIsTouched,
        clearInputValue: clearStreetNumberValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        value: propertyPostcode,
        hasError: postcodeHasError,
        isValid: postcodeIsValid,
        valueChangeHandler: postcodeChangeHandler,
        valueBlurHandler: postcodeBlurHandler,
        setInputIsTouched: postcodeIsTouched,
        clearInputValue: clearPostcodeValue

    } = useInput((value: string) => value.trim() !== '')

    const {
        value: pictureUrl,
        hasError: pictureUrlHasError,
        isValid: pictureUrlIsValid,
        valueChangeHandler: pictureUrlChangeHandler,
        valueBlurHandler: pictureUrlBlurHandler,
        setInputIsTouched: pictureUrlIsTouched,
        clearInputValue: clearPictureUrlValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        value: priceValue,
        hasError: priceHasError,
        isValid: priceIsValid,
        valueChangeHandler: priceChangeHandler,
        valueBlurHandler: priceBlurHandler,
        setInputIsTouched: priceIsTouched,
        clearInputValue: clearPriceValue
    } = useInput((value: string) => value.trim() !== '')

    const {
        value: propertyDescription,
        hasError: propertyDescriptionHasError,
        isValid: propertyDescriptionIsValid,
        valueChangeHandler: propertyDescriptionChangeHandler,
        valueBlurHandler: propertyDescriptionBlurHandler,
        setInputIsTouched: propertyDescriptionIsTouched,
        clearInputValue: clearPropertyDescription
    } = useInput((value: string) => value.trim() !== '')


    const [propertyType, setPropertyType] = useState('');
    const [propertyState, setPropertyState] = useState('');
    const [propertyCity, setPropertyCity] = useState('');
    const [propertyMarket, setPropertyMarket] = useState('')
    const [searchValue, setSearchOption] = useState('');
    const [propertySellType, setPropertySellType] = useState('');

    const [isFormInvalid, setIsFormInvalid] = useState<boolean>(true);

    const context = useContext(PropertyContext);

    // console.log(
    //     'Street name value: ', propertyStreetName,
    //     'Street name hasError: ', streetNameHasError,
    //     'Street name isValid: ', streetNameIsValid,
    //     'Post code isValid: ', postcodeIsValid,
    //     'City isValid: ', postcodeIsValid)

    useEffect(() => {
        if (streetNameIsValid && streetNumberIsValid &&
            postcodeIsValid &&
            propertyType && streetTypeIsValid && priceIsValid) {
            setIsFormInvalid(false)
        } else {
            setIsFormInvalid(true)
        }
    }, [propertyStreetName, propertyStreetNumber, propertyPostcode, propertyType, streetType, priceValue]);


    const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        streetNameIsTouched();
        streetNumberIsTouched();
        bedroomNumberIsTouched();
        bathroomNumberIsTouched();
        carSpaceNumberIsTouched();
        propertySpaceIsTouched();
        unitNumberIsTouched();
        postcodeIsTouched();
        streetTypeIsTouched();
        pictureUrlIsTouched();
        priceIsTouched();
        propertyDescriptionIsTouched();

        if (isFormInvalid) {
            console.log('Form is invalid')
            return;
        }

        const propertyData = {
            type: propertyType,
            marketType: propertyMarket,
            bedrooms: bedroomsNumber,
            bathrooms: bathroomsNumber,
            carSpace: carSpaceNumber,
            space: propertySpace,
            unit: unitNumber,
            streetNumber: propertyStreetNumber,
            streetName: propertyStreetName,
            streetType: streetType,
            postCode: propertyPostcode,
            state: propertyState,
            city: propertyCity,
            photos: [pictureUrl],
            price: priceValue,
            sellType: propertySellType,
            description: propertyDescription
        }

        clearStreetNameValue();
        clearBedroomNumberValue();
        clearBathroomNumberValue();
        clearCarSpaceNumberValue();
        clearPropertySpaceValue();
        clearStreetNumberValue();
        clearPostcodeValue();
        clearUnitNumberValue();
        clearStreetTypeValue();
        clearPictureUrlValue();
        clearPriceValue();
        clearPropertyDescription();
        setPropertyType('');
        setPropertyMarket('');
        setPropertyState('');
        setPropertyCity('');

        const response = await fetch('/api/new-property', {
            method: 'POST',
            body: JSON.stringify(propertyData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const propertyDataResponse = await response.json();

        // const getLatLongProperty = await fetch('/api/location', {
        //     method: 'POST',
        //     body: JSON.stringify([
        //         unitNumber,
        //         propertyStreetNumber,
        //         propertyStreetName,
        //         streetType,
        //         propertyCity
        //     ]),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const latLongData = await getLatLongProperty.json();
        // console.log(latLongData);

        // context.addProperty(propertyData)

        //this will clear input and set isTouched to false
        console.log('Form Submitted!')
    }


    const propertyTypeHandler = (optionList: string) => {
        if (optionList) {
            setPropertyType(optionList);
        }
    }
    const clearPropertyTypeHandler = () => {
        setPropertyType('')
    }

    const propertyMarketHandler = (optionList: string) => {
        setPropertyMarket(optionList);
    }
    const propertySellTypeHandler = (optionList: string) => {
        setPropertySellType(optionList);
    }

    const clearPropertyMarketHandler = () => {
        setPropertyMarket('');
    }

    const clearPropertySellTypeHandler = () => {
        setPropertySellType('');
    }

    const propertyStateHandler = (optionList: string) => {
        setPropertyState(optionList);
    }
    const clearStateHandler = () => {
        setPropertyState('');
    }


    const updateCityChangeHandler = (optionList: string) => {
        setPropertyCity(optionList);
        setSearchOption('');
    }

    const cityInputChangeHandler = (inputValue: string) => {
        setPropertyCity(inputValue);
        setSearchOption(inputValue);
    }

    const filterDropdownList = (searchInput: string) => {
        if (searchInput === '') {
            return context.getCities().sort();
        } else {
            return context.getCities().filter(location => location.toLowerCase().startsWith(searchInput.toLowerCase())).sort();
        }
    }


    //console.log(context.propertyTypes);

    return (
        <AddFormWrapper onSubmit={formSubmitHandler}>
            <PropertyType>
                <Dropdown label="Property type:" placeholder="Choose type" value={propertyType}
                          onClearInput={clearPropertyTypeHandler}>
                    <LocationList>
                        <CustomList onOptionChose={propertyTypeHandler} listItems={context.propertyTypes}/>
                    </LocationList>
                </Dropdown>
                {/*{!propertyType && <ErrorMessage message="Please choose property type."/>}*/}
            </PropertyType>

            <PropertyMarket>
                <Dropdown label="I want to:" placeholder="Choose market" value={propertyMarket}
                          onClearInput={clearPropertyMarketHandler}>
                    <LocationList>
                        <CustomList onOptionChose={propertyMarketHandler} listItems={context.market}/>
                    </LocationList>
                </Dropdown>
            </PropertyMarket>
            <BedroomInput>
                <Input input={
                    {
                        id: "beds",
                        type: "number",
                        placeholder: "Beds",
                        value: bedroomsNumber
                    }
                }
                       label="Bedrooms:"
                       onClearInput={clearBedroomNumberValue}
                       onBlur={bedroomNumberBlurHandler}
                       onChange={bedroomNumberChangeHandler}/>
                {bedroomNumberHasError && <ErrorMessage message="Please provide correct number"/>}
            </BedroomInput>
            <BathroomInput>
                <Input input={
                    {
                        id: "baths",
                        type: "number",
                        placeholder: "Bathrooms",
                        value: bathroomsNumber
                    }
                }
                       label="Bathrooms:"
                       onClearInput={clearBathroomNumberValue}
                       onBlur={bathroomNumberBlurHandler}
                       onChange={bathroomNumberChangeHandler}/>
                {bathroomNumberHasError && <ErrorMessage message="Please provide correct number"/>}
            </BathroomInput>
            <CarSpaceInput>
                <Input input={
                    {
                        id: "carSpace",
                        type: "number",
                        placeholder: "Car space:",
                        value: carSpaceNumber
                    }
                }
                       label="Car space:"
                       onClearInput={clearCarSpaceNumberValue}
                       onBlur={carSpaceNumberBlurHandler}
                       onChange={carSpaceNumberChangeHandler}/>
                {carSpaceNumberHasError && <ErrorMessage message="Please provide correct number"/>}
            </CarSpaceInput>
            <PropertySpace>
                <Input input={
                    {
                        id: "propertySpace",
                        type: "number",
                        placeholder: "Property space:",
                        value: propertySpace
                    }
                }
                       label="Property space:"
                       onClearInput={clearPropertySpaceValue}
                       onBlur={propertySpaceBlurHandler}
                       onChange={propertySpaceChangeHandler}/>
                {propertySpaceHasError && <ErrorMessage message="Please provide correct number"/>}
            </PropertySpace>
            <UnitNumber>
                <Input input={
                    {
                        id: "unit",
                        type: "number",
                        placeholder: "Unit",
                        value: unitNumber
                    }
                }
                       label="Unit number:"
                       onClearInput={clearUnitNumberValue}
                       onBlur={unitNumberBlurHandler}
                       onChange={unitNumberChangeHandler}/>
                {unitNumberHasError && <ErrorMessage message="Please provide correct number"/>}
            </UnitNumber>
            <StreetNumber>
                <Input input={
                    {
                        id: "streetNumber",
                        type: "string",
                        placeholder: "Street number",
                        value: propertyStreetNumber
                    }
                }
                       label="Street number:"
                       onClearInput={clearStreetNumberValue}
                       onBlur={streetNumberBlurHandler}
                       onChange={streetNumberChangeHandler}/>
                {streetNumberHasError && <ErrorMessage message="Please provide street number"/>}
            </StreetNumber>
            <StreetName>
                <Input input={
                    {
                        id: "streetName",
                        type: "string",
                        placeholder: "Street name",
                        value: propertyStreetName
                    }
                }
                       label="Street name:"
                       onBlur={streetNameBlurHandler}
                       onClearInput={clearStreetNameValue}
                       onChange={streetNameChangeHandler}/>
                {streetNameHasError && <ErrorMessage message="This field should be not empty."/>}
            </StreetName>
            <StreetType>
                <Input input={
                    {
                        id: "streetType",
                        type: "string",
                        placeholder: "Street type",
                        value: streetType
                    }
                }
                       label="Street name:"
                       onBlur={streetTypeBlurHandler}
                       onClearInput={clearStreetTypeValue}
                       onChange={streetTypeChangeHandler}/>
                {streetTypeHasError && <ErrorMessage message="This field should be not empty."/>}
            </StreetType>
            <PostCode>
                <Input input={
                    {
                        id: "postcode",
                        type: "number",
                        placeholder: "Post code",
                        value: propertyPostcode
                    }
                }
                       label="Post code:"
                       onBlur={postcodeBlurHandler}
                       onClearInput={clearPostcodeValue}
                       onChange={postcodeChangeHandler}/>
                {postcodeHasError && <ErrorMessage message="This field should be not empty."/>}
            </PostCode>
            <State>
                <Dropdown label="State:" placeholder="Choose state" value={propertyState}
                          onClearInput={clearStateHandler}>
                    <LocationList>
                        <CustomList onOptionChose={propertyStateHandler} listItems={context.states}/>
                    </LocationList>
                </Dropdown>
            </State>
            <City>
                <Dropdown label="City:"
                          placeholder="City"
                          value={propertyCity}
                          onInputChange={cityInputChangeHandler}
                          onClearInput={clearStateHandler}
                          type="search">
                    <LocationList>
                        <CustomList onOptionChose={updateCityChangeHandler}
                                    listItems={filterDropdownList(searchValue)}/>
                    </LocationList>
                </Dropdown>
            </City>
            <PictureUrl>
                <Input input={
                    {
                        id: "pictureUrl",
                        type: "url",
                        placeholder: "Picture URL:",
                        value: pictureUrl,
                        pattern: "https?://.+"
                    }
                }
                       label="Picture URL:"
                       onBlur={pictureUrlBlurHandler}
                       onClearInput={clearPictureUrlValue}
                       onChange={pictureUrlChangeHandler}/>
                {pictureUrlHasError && <ErrorMessage message="Please provide correct URL."/>}
            </PictureUrl>
            <Description>
                <Input  type="textarea" input={
                    {
                        id: "propertyDescription",
                        type: "string",
                        placeholder: "Description:",
                        value: propertyDescription,
                    }
                }
                       label="Description:"
                       onBlur={propertyDescriptionBlurHandler}
                       onClearInput={clearPropertyDescription}
                       onChange={propertyDescriptionChangeHandler}/>
                {priceHasError && <ErrorMessage message="Please add property description!"/>}
            </Description>
            <Price>
                <Input input={
                    {
                        id: "priceValue",
                        type: "number",
                        placeholder: "Price:",
                        value: priceValue,
                        min: 0,
                        max: 999999999,
                        step: 0.01
                    }
                }
                       label="Price:"
                       onBlur={priceBlurHandler}
                       onClearInput={clearPriceValue}
                       onChange={priceChangeHandler}/>
                {priceHasError && <ErrorMessage message="Please provide correct URL."/>}
            </Price>
            <PropertySellType>
                <Dropdown label="Sell type:" placeholder="Choose sell option" value={propertySellType}
                          onClearInput={clearPropertySellTypeHandler}>
                    <LocationList>
                        <CustomList onOptionChose={propertySellTypeHandler} listItems={context.sellType}/>
                    </LocationList>
                </Dropdown>
            </PropertySellType>
            {/*<FormInvalidMessage>*/}
            {/*    {isFormInvalid  && <ErrorMessage message="Please fill the form."/>}*/}
            {/*</FormInvalidMessage>*/}
            <FormSubmitButton>
                <CustomButton buttonInverted type="submit">+ Add</CustomButton>
            </FormSubmitButton>
        </AddFormWrapper>
    )
}

export default AddForm
