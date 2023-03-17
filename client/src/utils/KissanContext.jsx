import React, {useState} from 'react'
import { ethers } from 'ethers'
import { contractAbi, contractAddress } from './constants.js'



const KissanContext = React.createContext()

export function KissanContextProvider({children}) {
    
    const [account, setAccount] = useState();
    
    // useEffect(getKCOContract,[])
    // 7e100f1ac170aded56a2aa825630b63d7aeba2ae8a1d08ab09e1b02746916003
    function getKCOContract(){
        const provider = new ethers.providers.AlchemyProvider("goerli","TxZVv3vnGKYQCFlQz_UQngnFjd-7j7Go")
        // console.log("Provider",provider)
        const signer = new ethers.Wallet('7e100f1ac170aded56a2aa825630b63d7aeba2ae8a1d08ab09e1b02746916003',provider)
        // console.log("Signer:",signer)
        const KCOContract = new ethers.Contract(contractAddress, contractAbi, signer)
        !account && setAccount(signer.address)
        return KCOContract
    }
    return (
        <KissanContext.Provider value={{ getKCOContract, account }} >
            {children}
        </KissanContext.Provider>
    )
}

export default KissanContext