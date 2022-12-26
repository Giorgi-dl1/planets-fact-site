import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BlockSection from '../components/BlockSection'
import PlanetImage from '../components/PlanetImage'
import PlanetNavM from '../components/PlanetNavM'
import PlanetNavS from '../components/PlanetNavS'
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
  return (
    <>
      <PlanetNavS
        links={planetNavLinks}
        name={name}
        color={planet.color}
        active={show}
      />
      <div className="z-5 flex flex-col px-6 md:px-10 lg:px-8 mt-16 lg:flex-row lg:gap-5">
        <div className="mx-auto z-[5] lg:grid lg:place-content-center">
          <PlanetImage name={name} show={show} />
        </div>

        <div className=" text-center mt-[5rem] lg:mt-0 mx-auto md:flex gap-[70px] md:text-left lg:flex-col lg:justify-center">
          <div className="max-w-[340px]">
            <h1 className="text-[40px] md:text-[48px] lg:text-[80px] uppercase">
              {planet.name}
            </h1>
            <div className="text-[11px] font-spartan mt-4 mb-8 ">
              {planet[show]}
            </div>
            <div className="text-[12px] pointer-events-auto flex gap-1 justify-center opacity-50 md:justify-start">
              <span>Source: </span>
              <span className="flex gap-1">
                <a
                  href={`https://en.wikipedia.org/wiki/${name}`}
                  target="_blank"
                  className="underline font-bold"
                >
                  Wikipedia
                </a>
                <img src="/assets/icon-source.svg" alt="source icon" />
              </span>
            </div>
          </div>

          <PlanetNavM
            links={planetNavLinks}
            name={name}
            color={planet.color}
            active={show}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6 md:flex-row md:justify-between lg:mt-20 px-6 md:px-10 lg:px-8 ">
        <BlockSection label="ROTATION TIME" value={planet.rotation} />
        <BlockSection label="REVOLUTION TIME" value={planet.revolution} />
        <BlockSection label="RADIUS" value={planet.radius} />
        <BlockSection label="AVERAGE TEMP." value={planet.avTemp} />
      </div>
    </>
  )
}