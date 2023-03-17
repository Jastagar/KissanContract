import React, {useState} from 'react'
import { ethers } from 'ethers'
import { contractAbi, contractAddress } from './constants.js'

const KissanContext = React.createContext()

export function KissanContextProvider({children}) {
    
    const [account, setAccount] = useState();
    
    // useEffect(getKCOContract,[])

    function getKCOContract(){
        const provider = new ethers.providers.AlchemyProvider("goerli","TxZVv3vnGKYQCFlQz_UQngnFjd-7j7Go")
        // console.log("Provider",provider)
        const signer = new ethers.Wallet("da16055875638e551f73e81e1252e40d161b3ab47758c376c055f0bc0d4cd8b0",provider)
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