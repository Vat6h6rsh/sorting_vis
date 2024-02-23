import { SortingAlgorithmType } from "@/lib/types";
import { createContext, useContext, useState } from "react";
import {MAX_ANMATION_SPEED} from "@/lib/utils"
interface sortingAlgorithemContextType {
    arrayToSort: number[];
    setArrayToSort: (array: number[]) => void;
    selectedAlgorithm: SortingAlgorithmType;
    setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
    isSorting: boolean;
    setIsSorting: (isSorting: boolean) => void;
    animationSpeed: number;
    setAnimationSpeed: (speed: number) => void;
    isAnimationComplete: boolean;
    setIsAnimationComplete: (isComplete: boolean) => void;
    resetArrayAndAnimation: () => void;
    runAnimation: () => void;
}

const sortingAlgorithemContext = createContext<sortingAlgorithemContextType | undefined>(undefined)

export const sortingAlgorithmProvider = ({children}: {children: React.ReactNode}) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([])
    const [selectedAlgorithm, setSelectedAlgorithm] =
     useState<SortingAlgorithmType>("bubble")
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANMATION_SPEED)
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)

    const resetArrayAndAnimation = () => {}

    const runAnimation = () => {}

    const value = {
        arrayToSort,
        setArrayToSort,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setIsAnimationComplete,
        resetArrayAndAnimation,
        runAnimation,
    };

    return (
        <sortingAlgorithemContext.Provider value={{value}}>
            {children}
        </sortingAlgorithemContext.Provider>
    );
};


export const useSortingAlgorithmContext = () => {
    const context = useContext(sortingAlgorithemContext)
    if (!context) {
        throw new Error("useSortingAlgorithemContext must be used within a SortingAlgorithmProvider")
    }
    return context
};