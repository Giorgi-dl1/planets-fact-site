import React from 'react'

export default function PlanetImage({ name, show }) {
  switch (show) {
    case 'overview':
      return <img src={`/assets/planet-${name}.svg`} alt="planet" />
    case 'structure':
      return <img src={`/assets/planet-${name}-internal.svg`} alt="planet" />
    case 'geology':
      return (
        <>
          <div className="relative max-w-max ">
            <img src={`/assets/planet-${name}.svg`} alt="planet" />
          </div>
          <img
            src={`/assets/geology-${name}.png`}
            alt="icon"
            className="absolute w-[30%] md:w-[163px] top-[50%] md:top-[57%] left-[50%] translate-y-[2rem] translate-x-[-50%]"
          />
        </>
      )

    default:
      return <img src={`/assets/planet-${name}.svg`} alt="planet" />
  }
}
