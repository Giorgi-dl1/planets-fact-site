import PlanetNavLink from './PlanetNavLink'

export default function PlanetNavM({ links, name, color, active }) {
  return (
    <div className="font-spartan font-bold text-[9px] lg:text-[12px] uppercase tracking-widest pointer-events-auto hidden md:flex flex-col gap-4 md:translate-y-[25px] lg:translate-y-0">
      {links.map((link, index) => (
        <PlanetNavLink
          link={link}
          index={index}
          name={name}
          color={color}
          active={active}
        />
      ))}
    </div>
  )
}
