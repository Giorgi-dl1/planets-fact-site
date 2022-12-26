import { Link } from "react-router-dom";

export default function LinksS({planet, setShow}) {
  return (
    <Link to={`/planet/${planet.name}/overview`} onClick={()=>setShow(false)} className='py-5 flex justify-between border-b border-b-[#ffffff36] last:border-b-0 z-10'>
      <div className='flex gap-6 '>
        <div style={{backgroundColor: planet.iconC}} className="w-5 h-5 rounded-full"/>
            <span className="font-spartan uppercase">{planet.name}</span>
        </div>
        <img src="/assets/icon-chevron.svg" alt="arrow" className='w-1 h-2' />
    </Link>

  )
}
