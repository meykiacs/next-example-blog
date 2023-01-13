import { useState } from "react"

export default function ThemeSwitch() {

  const [darkMode, setDarkMode] = useState(false)
  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <style jsx global>{`
      :root {
        --background-color: rgb(26, 25, 25);
        --link-color: rgb(221, 199, 4);
        --text-color: rgb(228, 228, 228);
      }
    `}
      </style>}
    </>
  )
}