'use client';

import React from 'react'

interface ManuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<ManuItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div onClick={onClick} className="group px-3 py-3 flex flex-row items-center gap-2 cursor-pointer text-[f0f0f0] sm:text-[#1b1b1b] md:text-[#1b1b1b] font-[400] text-[14px]">
      {label}
    </div>

  )
}

export default MenuItem
