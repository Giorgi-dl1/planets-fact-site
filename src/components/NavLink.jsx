import { useState } from "react";
import { Link } from "react-router-dom";


export default function NavLink({planet}) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    const style = {
        borderColor: isHover ? planet.color : 'transparent',
    };
  return (
    <Link
    to={`/planet/${planet.name}/overview`}
    className="uppercase lg:pt-8 lg:pb-7 md:border-b lg:border-b-0 lg:border-t-4 transition duration-300"
    style={style}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        {planet.name}
    </Link>
  )
}
