import { createContext, useState } from 'react'

export const themeContext = createContext()

export const ThemeProvider = ({ children }) => {
  //   console.log(children)
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDarkMode'))
  )
  return (
    <themeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </themeContext.Provider>
  )
}
