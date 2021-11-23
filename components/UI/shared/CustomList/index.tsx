import React from 'react';

import {CustomUnorderedList, ListItem, InfoMessage} from "./CustomList.styles";

const CustomList: React.FC<{ onOptionChose: (optionList: string) => void, listItems: string[] }> = (props) => {

  const getListItemHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    props.onOptionChose(event.currentTarget.getAttribute('value') || '');
  }

  if (props.listItems.length > 0) {

    return (
        <CustomUnorderedList>
          {
            props.listItems.map(item =>
                <ListItem key={Math.random().toString().split('.').join('')}
                          value={item}
                          onClick={getListItemHandler}
                >
                  {item}
                </ListItem>
            )
          }
        </CustomUnorderedList>
    )
  } else {
    return (
        <InfoMessage>No cities were found.</InfoMessage>
    )
  }
}


export default CustomList;
