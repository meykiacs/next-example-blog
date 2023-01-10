import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }
        
        li {
          display: inline;
        }
        
        li:not(:first-child) {
          margin-left: 0.75rem;
        }        
      `}
      </style>
    </nav>
  )
}