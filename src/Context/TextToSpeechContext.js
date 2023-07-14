import { createContext, useState } from "react";

export const TextToSpeechContext = createContext("");
export const TextToSpeechProvider = ({children}) => {
    const [toggleValue, setToggleValue] = useState(false);
    return (
        <TextToSpeechContext.Provider value={{toggleValue, setToggleValue}}>
            {children}
        </TextToSpeechContext.Provider>
    )
}