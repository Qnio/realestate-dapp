import {createContext, Provider, useContext, useEffect, useMemo, useState} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import {web3ApiState} from "../../../models/web3api";
import {setupHooks} from "@components/providers/web3/hooks/setupHooks";


const Web3Context = createContext<web3ApiState>({
})

export default function Web3Provider({children}: any) {

    const [web3Api, setWeb3Api] = useState<web3ApiState>( {provider: null,
        web3: null,
        contract: null,
        getHooks: null,
        isLoading: true})

    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider();

            if (provider) {
                const web3 = new Web3(Web3.givenProvider);
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoading: false
                })
            } else {
                setWeb3Api(api => ({...api, isLoading: false}))
                console.error('Please install MetaMask!')
            }
        }
        loadProvider();
    }, [])

    const _web3Api = useMemo(() => {
        console.log('Memo web3Api run!')
        const {web3, provider} = web3Api;
        return {
            ...web3Api,
            isWeb3Loaded: web3 !== null,
            getHooks: () => setupHooks(web3, provider),
            connect: provider ?
                async () => {
                    try {
                        await provider.request({method: "eth_requestAccounts"})
                    } catch {
                        location.reload();
                    }
                } :
                () => console.error('Connection issues in _web3Api')
        }
    }, [web3Api]);

    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context)
}

//for eg. cb: (hooks) => hooks.useAccount()
export function useHooks(cb: any) {
    const { getHooks } = useWeb3();
    const hook = getHooks();
    return cb(hook);
}
