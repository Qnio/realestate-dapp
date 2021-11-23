//function that will return our hook as a function
import {useEffect, useState} from "react";
import useSWR from 'swr';

export const handler = (web3, provider) => () => {

    const adminAccounts = {
        '0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9': true
    }

    const {data, mutate, ...rest} = useSWR(() =>
        web3 ? 'web3/accounts' : null,
            async () => {
                const accounts = await web3.eth.getAccounts();
                return accounts[0]
            }
    )


    useEffect(() => {
        provider && provider.on("accountsChanged", accounts => mutate(accounts[0]) ?? null)
    }, [provider])

    return {
        account: {
            data,
            isAdmin: (data && adminAccounts[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        }
    }
}
