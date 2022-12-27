import React from 'react'

export default function BlockSection({ label, value }) {
  return (
    <div className="py-2 px-6 md:py-5 md:px-4 lg:py-6 lg:px-5 border border-[#ffffff3f] flex justify-between items-center md:items-start max-w-[330px] w-full m-auto md:m-0 md:flex-col ">
      <span className="text-[11px] font-spartan opacity-[0.5]">{label}</span>
      <span className="text-[20px] md:text-[24px] lg:text-[40px]">{value}</span>
    </div>
  )
}
