import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext()

export const useUserDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode) {
            document.body.firstElementChild.classList.add('darkMode')
        }else{
            document.body.firstElementChild.classList.remove('darkMode')
        }
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}