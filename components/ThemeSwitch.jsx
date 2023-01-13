import { useEffect, useState } from 'react'
import DarkTheme from './DarkTheme'

export default function ThemeSwitch() {
  console.log('theme switch component called')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const value = localStorage.getItem('darkMode')
    setDarkMode(value === null ? false : JSON.parse(value))
  }, [])

  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  const handleClick = e => {
    setDarkMode(!darkMode)
    // no need to check for localStorage availability
    // since the handleClick only happens in the browser
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <style jsx>
        {`
          button {
            background-color: transparent;
            border: none;
            color: inherit;
            cursor: pointer;
          }
        `}
      </style>

      {darkMode && <DarkTheme />}
    </>
  )
}
