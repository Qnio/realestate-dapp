import React, {useContext, useEffect, useState} from 'react';
import {
    NavFormContainer,
    FormContainer,
    FormElement,
    PriceCounter,
    PriceAmount,
    LocationList
} from './SearchBar.styles';

import PropertyContext from "../../../../store/property-context";

import {DropdownSearchBar} from "@components/UI/shared";
import SearchBarNav from "../SearchBarNav/SearchBarNav";
import MinusIconCircle from "../../SvgIcons/MinusIconCircle";
import PlusIconCircle from "../../SvgIcons/PlusIconCircle";
import {CustomButton} from "@components/UI/shared";
import SearchIconSvg from "../../SvgIcons/SearchIcon";
import {ErrorMessage} from "@components/UI/shared";
import {CustomList} from "@components/UI/shared";
import {SearchProperty} from "../../../../models/property";


const SearchBar: React.FC<{ onSearchProperties: (searchQuery: SearchProperty) => void, locations: string[] }> =
    (props) => {

        const [maxPrice, setMaxPrice] = useState<number>(0);
        const [minPrice, setMinPrice] = useState<number>(0);
        const [choseOption, setChoseOption] = useState('sell');
        const [location, setLocationOption] = useState('');
        const [searchValue, setSearchOption] = useState('');
        const [propertyType, setPropertyOption] = useState('');
        const [error, setError] = useState<{ isError: boolean, message: string }>({
            isError: false,
            message: ''
        });

        const context = useContext(PropertyContext);


        const navOptionHandler = (option: string) => {
            setChoseOption(() => option);
        }

        const clearPrice = () => {
            setMinPrice(0);
            setMaxPrice(0);
        }

        const priceHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

            if (event.currentTarget.name === 'minPriceDown' && parseInt(event.currentTarget.value) > 0) {
                setMinPrice((prevValue?: number, nextValue?: number) => {
                    if (choseOption === 'sell') {
                        nextValue = prevValue! - 50000;
                    } else {
                        nextValue = prevValue! - 50;
                    }
                    return nextValue;
                })
            } else if (event.currentTarget.name === 'minPriceUp') {
                setMinPrice((prevValue?: number, nextValue?: number) => {
                    if (choseOption === 'sell') {
                        nextValue = prevValue! + 50000;
                    } else {
                        nextValue = prevValue! + 50;
                    }
                    return nextValue;
                })
            } else if (event.currentTarget.name === 'maxPriceDown' && parseInt(event.currentTarget.value) > 0) {
                setMaxPrice((prevValue?: number, nextValue?: number) => {
                    if (choseOption === 'sell') {
                        nextValue = prevValue! - 50000;
                    } else {
                        nextValue = prevValue! - 50;
                    }
                    return nextValue;
                })
            } else if (event.currentTarget.name === 'maxPriceUp') {
                setMaxPrice((prevValue?: number, nextValue?: number) => {
                    if (choseOption === 'sell') {
                        nextValue = prevValue! + 50000;
                    } else {
                        nextValue = prevValue! + 50;
                    }
                    return nextValue;
                })
            } else return;
        }

        const clearMinPriceHandler = () => {
            setMinPrice(0)
        }

        const clearMaxPriceHandler = () => {
            setMaxPrice(0)
        }

        const clearLocationHandler = () => {
            setLocationOption('')
        }

        const clearPropertyTypeHandler = () => {
            setPropertyOption('')
        }

        const updateLocationHandler = (optionList: string) => {
            setLocationOption(optionList);
            setSearchOption('');
        }

        const updateTypePropertyHandler = (optionList: string) => {
            setPropertyOption(optionList);
        }

        const setInputLocationHandler = (inputValue: string) => {
            setLocationOption(inputValue);
            setSearchOption(inputValue);
        }

        const maxPriceInputHandler = (inputValue: string) => {
            setMaxPrice(parseInt(inputValue))
        }

        const filterDropdownList = (searchInput: string) => {
            if (searchInput === '') {
                return context.getCities().sort();
            } else {
                return context.getCities().filter(location => location.toLowerCase().startsWith(searchInput.toLowerCase())).sort();
            }
        }

        const searchFormHandler = () => {
            props.onSearchProperties({
                location,
                propertyType,
                minPrice,
                maxPrice,
                choseOption
            })
        }

        useEffect(() => {
            if (minPrice <= maxPrice || maxPrice === 0) {
                setError({
                    isError: false,
                    message: ''
                });
            } else if (minPrice > maxPrice && maxPrice !== 0) {
                setError({
                    isError: true,
                    message: 'Please provide correct price range.'
                })
            }

        }, [minPrice, maxPrice]);

        useEffect(() => {
            clearPrice();
            searchFormHandler();
        }, [choseOption]);

        return (
            <NavFormContainer>
                <SearchBarNav onOptionChange={navOptionHandler} choseOption={choseOption}/>
                <FormContainer>
                    <FormElement>
                        <DropdownSearchBar inputType='search'
                                           titleText='Location'
                                           isDisabled={false}
                                           inputValue={location}
                                           placeholderValue='Enter location'
                                           onClearInput={clearLocationHandler}
                                           onInputChange={setInputLocationHandler}>
                            <LocationList>
                                <CustomList onOptionChose={updateLocationHandler}
                                            listItems={filterDropdownList(searchValue)}/>
                            </LocationList>
                        </DropdownSearchBar>
                    </FormElement>
                    <FormElement>
                        <DropdownSearchBar titleText='Type of property:'
                                           isDisabled={true}
                                           inputValue={propertyType}
                                           placeholderValue="Add type"
                                           onClearInput={clearPropertyTypeHandler}>
                            <LocationList>
                                <CustomList onOptionChose={updateTypePropertyHandler}
                                            listItems={context.propertyTypes}/>
                            </LocationList>
                        </DropdownSearchBar>
                    </FormElement>
                    <FormElement>
                        <DropdownSearchBar titleText={`${choseOption === 'sell' ? 'Min price' : 'Min rent price'}`}
                                           isDisabled={true}
                                           isError={error.isError}
                                           inputValue={minPrice}
                                           placeholderValue="Price from"
                                           onClearInput={clearMinPriceHandler}>
                            <PriceCounter>
                                <CustomButton
                                    iconBtnWrapper
                                    type={'button'}
                                    name='minPriceDown'
                                    value={minPrice}
                                    disabled={minPrice === 0}
                                    onClick={priceHandler}>
                                    <MinusIconCircle size={24}/>
                                </CustomButton>
                                <PriceAmount>{minPrice}</PriceAmount>
                                <CustomButton
                                    iconBtnWrapper
                                    type={'button'}
                                    name='minPriceUp'
                                    value={minPrice}
                                    onClick={priceHandler}>
                                    <PlusIconCircle size={24}/>
                                </CustomButton>
                            </PriceCounter>
                            <ErrorMessage message={error.message}/>
                        </DropdownSearchBar>
                    </FormElement>
                    <FormElement>
                        <DropdownSearchBar
                            inputType="number"
                            titleText={`${choseOption === 'sell' ? 'Max buy price' : 'Max rent price'}`}
                            isDisabled={false}
                            isError={error.isError}
                            inputValue={maxPrice}
                            placeholderValue="Price to"
                            onClearInput={clearMaxPriceHandler}
                            onInputChange={maxPriceInputHandler}>
                            <PriceCounter>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <CustomButton
                                    iconBtnWrapper
                                    type={'button'}
                                    name='maxPriceDown'
                                    value={maxPrice}
                                    disabled={maxPrice === 0}
                                    onClick={priceHandler}>
                                    <MinusIconCircle size={24}/>
                                </CustomButton>
                                <PriceAmount>{maxPrice}</PriceAmount>
                                <CustomButton
                                    iconBtnWrapper
                                    type={'button'}
                                    name='maxPriceUp'
                                    value={maxPrice}
                                    onClick={priceHandler}>
                                    <PlusIconCircle size={24}/>
                                </CustomButton>
                            </PriceCounter>
                            <ErrorMessage message={error.message}/>
                        </DropdownSearchBar>
                    </FormElement>
                    <FormElement searchButton>
                        <CustomButton searchBtn type='button' onClick={searchFormHandler}>
                            <SearchIconSvg size={16}/>
                        </CustomButton>
                    </FormElement>

                </FormContainer>
            </NavFormContainer>
        )

    }

export default SearchBar;
