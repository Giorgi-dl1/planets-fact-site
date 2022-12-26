import React from 'react'

export default function PlanetImage({ name, show }) {
  switch (show) {
    case 'overview':
      return <img src={`/assets/planet-${name}.svg`} alt="planet" />
    case 'structure':
      return <img src={`/assets/planet-${name}-internal.svg`} alt="planet" />
    case 'geology':
      return (
        <div className="relative max-w-max mb-[5rem]">
          <img src={`/assets/planet-${name}.svg`} alt="planet" />
          <img
            src={`/assets/geology-${name}.png`}
            alt="icon"
            className="absolute w-[40%] bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]"
          />
        </div>
      )

    default:
      return <img src={`/assets/planet-${name}.svg`} alt="planet" />
  }
}
