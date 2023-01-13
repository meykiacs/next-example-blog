export default function DarkTheme() {
  console.log('darktheme component called')
  return (
    <style jsx global>
      {`
        :root {
          --background-color: rgb(26, 25, 25);
          --link-color: rgb(221, 199, 4);
          --text-color: rgb(228, 228, 228);
        }
      `}
    </style>
  )
}
