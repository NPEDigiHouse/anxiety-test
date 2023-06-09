import React from 'react';

export interface IVerticalDivider {
  h?: "sm" | "md" | "lg",
  hiddenIfSm?: boolean;
}

const VerticalDivider: React.FC<IVerticalDivider> = ({ h="md", hiddenIfSm=true }) => {
  return (
    <div className={`bg-secondary-500 w-[3px] ${h=="md"? "h-16" : (h=="sm"? "h-10" : "h-[100px]")} ${hiddenIfSm? "hidden sm:block" : ""} `}>
    </div>
  )
}
export default VerticalDivider;