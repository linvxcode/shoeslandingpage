import clsx from 'clsx';
import React from 'react'

interface SectionProps {
    title?: string,
    className?: string;
    
}

const Heading = ({className = '', title}: SectionProps) => {
  return (
    <h1 className={clsx('xl:text-8xl max-sm:text-white sm:transition-all sm:duration-300 text-6xl leading-normal mt-10 font-bold text-[#57C3FF]', className)}>
      {title}
    </h1>
  )
}

export default Heading
