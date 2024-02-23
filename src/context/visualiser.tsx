import { createContext, useState } from "react";

interface sortingAlgorithemContextType {}

const sortingAlgorithemContext = createContext<sortingAlgorithemContextType | undefined>(undefined)

export const sortingAlgorithemProvider = ({children}: {children: React.ReactNode}) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([])
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("")

    return <sortingAlgorithemContext.Provider value={{}}>{children}</sortingAlgorithemContext.Provider>
}