import React from 'react';
import {NavigationBar, OptionBox, OptionButton, OptionSwitcher} from "./SearchBarNav.styles";

const SearchBarNav: React.FC<{ onOptionChange: (option: string) => void, choseOption: string}> = (props) => {

    const selectButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onOptionChange(event.currentTarget.value);
    }

    return (
        <NavigationBar>
            <OptionBox>
                <OptionSwitcher>
                    <OptionButton
                        onClick={selectButtonHandler}
                        value='sell'
                        className={`${props.choseOption === 'sell' && 'selected'}`}
                    >Buy Property
                    </OptionButton>
                    <OptionButton
                        onClick={selectButtonHandler}
                        value='rent'
                        className={`${props.choseOption === 'rent' && 'selected'}`}
                    >Rent Property</OptionButton>
                </OptionSwitcher>
            </OptionBox>
        </NavigationBar>
    )
};

export default SearchBarNav;
