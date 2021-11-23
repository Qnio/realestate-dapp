import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
	html {
		box-sizing: border-box;
		font-size: 62.5%;
	}
	body {
		font-family: Poppins, sans-serif;
		font-size: 1.6rem;
	}
`;
