import { Link } from 'react-router-dom'

export default function PlanetNavS({ links, name, color, active }) {
  return (
    <div className="font-spartan font-bold text-[9px] uppercase tracking-widest flex justify-between px-6 border-b border-b-[#ffffff33] pointer-events-auto md:hidden">
      {links.map((link) => (
        <Link
          to={`/planet/${name}/${link.name}`}
          style={
            active === link.name
              ? { borderBottom: `4px solid ${color}` }
              : { borderColor: 'inherit' }
          }
          className={`pt-5 pb-4`}
        >
          {link.name === 'geology' ? 'surface' : link.name}
        </Link>
      ))}
    </div>
  )
}
