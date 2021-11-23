import { handler as createUseAccount } from "./useAccount";


//we need web 3 because we need to pas it further to other hooks like createUseAccount
export const setupHooks = (web3, provider) => {
    return {
        useAccount: createUseAccount(web3, provider)  //by calling this like that useAccount: handler(web3) will  return: () => { const [account, setAccount] = useState(null); ...}
    }
}
