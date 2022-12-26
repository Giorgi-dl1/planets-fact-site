import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import LinksS from './LinksS'
import NavLinks from './NavLinks'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <nav className="py-4 px-6 md:px-10 lg:px-8 border-b border-b-[#ffffff33] flex justify-between items-center pointer-events-auto md:flex-col md:items-center md:gap-10 lg:flex-row md:pt-8 md:pb-7 lg:pt-0 lg:pb-0">
        <Link to="/" className="text-3xl">
          THE PLANETS
        </Link>
        <img
          onClick={() => setShowMenu(!showMenu)}
          src="/assets/icon-hamburger.svg"
          alt="hamburger icon"
          className="z-10 cursor-pointer md:hidden"
        />
        <NavLinks planets={data} />
      </nav>
      <div
        style={{
          left: showMenu ? '0' : '-770px',
          right: showMenu ? '0' : '1000px',
        }}
        className="pointer-events-auto px-6 pt-11 bg-[#070724] z-10 absolute top-[69px] bottom-0 left-0 right-0 tranistion duration-300 md:hidden"
      >
        {data.map((planet) => (
          <LinksS planet={planet} setShow={setShowMenu} key={planet.name} />
        ))}
      </div>
    </>
  )
}
