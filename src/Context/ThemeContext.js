import { createContext, useState,useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}){


    const [Theme,setTheme] = useState('light');

    function SwitchToLightTheme(){
      setTheme('light');
      document.documentElement.classList.remove('dark');
      //console.log("Theme is now -> ",Theme);
    }
    function SwitchToDarkTheme(){
      setTheme('dark');
      document.documentElement.classList.add('dark');
      //console.log("Theme is now -> ",Theme);
    }


    function ToggleTheme(e){
        e.preventDefault();
        if(Theme === 'light'){
          SwitchToDarkTheme();
        }
        else if(Theme === 'dark'){
          SwitchToLightTheme();
        }
      }




    const data = {
        Theme,
        setTheme,
        ToggleTheme
    }
    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}