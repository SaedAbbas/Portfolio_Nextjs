import React from "react";

type MagicButtonProps = {
  title:string,
  icon:React.ReactNode,
  position?:string,
  otherClasses?:string,
}

const MagicButton = ({title,icon,position,otherClasses}:MagicButtonProps) => {

  return (
    <div>
      <button className="relative w-full inline-flex h-12 overflow-hidden rounded-2xl p-[1px] md:w-60 md:top-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full gap-3 cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
          {position === 'left' && icon}
         {title}
          {position === 'right' && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
