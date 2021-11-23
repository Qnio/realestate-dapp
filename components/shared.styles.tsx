export const underlineButton = () => {
    return `
        position: relative;
        border: none;
        background-color: transparent;
        padding: 0.2rem 1.6rem;
         
        &:before {
            content: '';
            position: absolute;
            width: 30px;
        
            height: 2px;
            background-color: #FF385C;
            left: 50%;
            margin-left: -15px;
            bottom: -5px;
            transform: scaleX(0);
            transition: .4s transform cubic-bezier(.77, 0, .175, 1);
        }
        &:hover:before {
            transform: scaleX(2);
        }
        
        &.selected:before {
            transform: scaleX(2);
        }
  `;
};

export const clickableListItem = () => {
    return `
        background-color: white;
        border-bottom: 1px solid lightgray;
        
        cursor: pointer;
        margin: 1rem 0;
        transition: all .3s;
  
        &:hover {
            background-color: rgb(247 99 99 / 9%);
            padding-left: 4px;
     }`
}

