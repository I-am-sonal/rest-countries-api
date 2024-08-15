import { useContext } from 'react'
import { themeContext } from '../../contexts/ThemeContext'

export const useTheme = () => useContext(themeContext)

// or
// export const useTheme = () => {
//     const [isDark, setIsDark] = useContext(themeContext)
// "useContext(themeContext)" will return entire array hence, no need to destrcture it
//     return [isDark, setIsDark]
// }
