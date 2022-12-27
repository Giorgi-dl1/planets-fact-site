import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PlanetNavLink({ link, index, name, color, active }) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <Link
      to={`/planet/${name}/${link.name}`}
      style={
        active === link.name
          ? { backgroundColor: color }
          : {
              backgroundColor: 'inherit',
              backgroundColor: isHover ? '#d8d8d838' : 'transparent',
            }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-2 px-5 lg:py-3  max-w-[280px] md:min-w-[280px] w-full border border-[#ffffff3f] transition duration-300"
    >
      0{index + 1} {link.label}
    </Link>
  )
}
