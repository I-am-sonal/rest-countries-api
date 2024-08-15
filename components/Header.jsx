import React, { useState } from 'react'
import { useTheme } from './hooks/useTheme'

const Header = ({ theme }) => {
  const [isDark, setIsDark] = useTheme()

  const handleTheme = () => {
    setIsDark(!isDark)
    localStorage.setItem('isDarkMode', !isDark)
  }
  return (
    <div>
      <header className={`header-container ${isDark ? 'dark' : ''}`}>
        <div className='header-content'>
          <h2 className='title'>
            <a href='/'>World Cultures</a>
          </h2>
          <p className='theme-changer' onClick={() => handleTheme()}>
            <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>
            {isDark ? ' Light' : ' Dark'} Mode
          </p>
        </div>
      </header>
    </div>
  )
}

export default Header
