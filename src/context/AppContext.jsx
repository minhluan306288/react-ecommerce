
import { createContext, useState } from "react";

const AppContext = createContext()
export function AppProvider({children}){
   const [theme, setTheme] = useState({theme:'dark', layout: 'harizontal'})
   
   return(
      <AppContext.Provider value={{theme,setTheme}} >
         {children}
      </AppContext.Provider> 
   )
}
export default AppContext