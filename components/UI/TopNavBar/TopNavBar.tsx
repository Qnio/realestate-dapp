import React, {useEffect} from "react";
import Link from "next/link";
import {H4, PrimaryLink} from "../../../styles/typography.styles";

import "./TopNavBar.styles";
import {NavBar, NavMenu, NavItem, MenuPanel, AccountBox, Account} from "./TopNavBar.styles";
import {CustomButton} from "@components/UI/shared";
import {useWeb3} from '@components/providers';
import {useAccount} from "@components/hooks/web3/useAccount";


const TopNavBar = () => {
    const {connect, isLoading, isWeb3Loaded} = useWeb3();
    const {account} = useAccount()


    return (
        <NavBar>
            <MenuPanel>
                <H4>Real Estate App</H4>
                <NavMenu>
                    <NavItem>
                        <Link href='/' passHref>
                            <PrimaryLink>Home</PrimaryLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        {account.data && <Link href='/property/add' passHref>
                            <PrimaryLink>Sell</PrimaryLink>
                        </Link>

                        }

                    </NavItem>
                    <NavItem>
                        {isLoading ?
                            <CustomButton onClick={connect} bgColor='#FF385C' type='button'>Loading...</CustomButton> :
                            isWeb3Loaded ?
                                account.data ?
                                    <h4>Welcome {account.isAdmin && 'Admin'}</h4> :
                                    <CustomButton onClick={connect} bgColor='#FF385C'
                                                  type='button'>Connect</CustomButton> :
                                <CustomButton onClick={() => window.open("https://metamask.io/download", "_blank")}>Install
                                    Metamask</CustomButton>
                        }

                    </NavItem>
                </NavMenu>
            </MenuPanel>
            {account.data && <AccountBox>
                <Account>
                    {account.data}
                </Account>
            </AccountBox>}
        </NavBar>
    )
}

export default TopNavBar;



