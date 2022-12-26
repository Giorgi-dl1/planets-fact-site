import { Link } from 'react-router-dom'

export default function PlanetNavM({ links, name, color, active }) {
  return (
    <div className="font-spartan font-bold text-[9px] uppercase tracking-widest pointer-events-auto hidden md:flex flex-col gap-4 md:translate-y-[25px]">
      {links.map((link, index) => (
        <Link
          to={`/planet/${name}/${link.name}`}
          style={
            active === link.name
              ? { backgroundColor: color }
              : { backgroundColor: 'inherit' }
          }
          className="py-2 px-5 max-w-[280px] md:min-w-[280px] w-full border border-[#ffffff3f] "
        >
          0{index + 1} {link.label}
        </Link>
      ))}
    </div>
  )
}
