import React from "react";
import type {AppProps} from 'next/app'

import PropertyProvider from "../store/PropertyProvider";
import {IconContext} from "react-icons";

import {GlobalStyle} from "../styles/global.styles";
import TopNavBar from "../components/UI/TopNavBar/TopNavBar";

import {AppContainer, AppMainContent, AppFooterContainer} from "../styles/App.styles";
import Footer from "../components/UI/Footer/Footer";
import {Web3Provider} from "../components/providers";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <Web3Provider>
            <PropertyProvider>
                <IconContext.Provider value={{ color: 'grey', size: '1.8rem' }}>
                    <AppContainer>
                        <TopNavBar/>
                        <AppMainContent>
                            <Component {...pageProps} />
                        </AppMainContent>
                        <AppFooterContainer>
                            <Footer/>
                        </AppFooterContainer>
                    </AppContainer>
                </IconContext.Provider>
            </PropertyProvider>
            </Web3Provider>
        </>
    )
}

export default MyApp
