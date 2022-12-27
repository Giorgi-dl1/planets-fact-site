import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlockSection from '../components/BlockSection'
import PlanetImage from '../components/PlanetImage'
import PlanetNavM from '../components/PlanetNavM'
import PlanetNavS from '../components/PlanetNavS'
import WikiLink from '../components/WikiLink'
import data from '../data.json'

export default function PlanetScreen() {
  const { name, show } = useParams()

  const planetNavLinks = [
    {
      name: 'overview',
      label: 'overview',
    },
    {
      name: 'structure',
      label: 'internal structure',
    },
    {
      name: 'geology',
      label: 'surface geology',
    },
  ]

  const planet = data.filter((planet) => planet.name === name)[0]
  useEffect(() => {
    document.title = name
  }, [name])
  return (
    <>
      <PlanetNavS
        links={planetNavLinks}
        name={name}
        color={planet.color}
        active={show}
      />
      <div className="z-5 flex flex-col px-6 md:px-10 lg:px-8 mt-16 lg:flex-row lg:gap-5">
        <div className="mx-auto z-[5] lg:grid lg:place-content-center relative">
          <PlanetImage name={name} show={show} />
        </div>

        <div className="text-center mt-[2rem] md:mt-[5rem] lg:mt-0 mx-auto md:flex gap-[70px] lg:gap-8 md:text-left lg:flex-col lg:justify-center ">
          <div className="max-w-[340px]">
            <h1 className="text-[40px] md:text-[48px] lg:text-[80px] uppercase">
              {planet.name}
            </h1>
            <div className="text-[11px] lg:text-[14px] tracking-wide font-spartan mt-4 mb-8 lg:mb-6">
              {planet[show]}
            </div>
            <WikiLink name={name} />
          </div>

          <PlanetNavM
            links={planetNavLinks}
            name={name}
            color={planet.color}
            active={show}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6 md:flex-row md:justify-between lg:mt-[90px] px-6 md:px-10 lg:px-8">
        <BlockSection label="ROTATION TIME" value={planet.rotation} />
        <BlockSection label="REVOLUTION TIME" value={planet.revolution} />
        <BlockSection label="RADIUS" value={planet.radius} />
        <BlockSection label="AVERAGE TEMP." value={planet.avTemp} />
      </div>
    </>
  )
}
