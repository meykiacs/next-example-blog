import { useState } from 'react'
import DarkTheme from './DarkTheme'

export default function ThemeSwitch() {
  console.log('theme switch component called')
  const [darkMode, setDarkMode] = useState(false)
  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
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
