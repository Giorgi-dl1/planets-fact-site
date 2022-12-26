import NavLink from './NavLink'

export default function NavLinks({ planets }) {
  return (
    <div className="hidden md:flex gap-[33px] items-center font-spartan">
      {planets.map((planet) => (
        <NavLink planet={planet} key={planet.name} />
      ))}
    </div>
  )
}
