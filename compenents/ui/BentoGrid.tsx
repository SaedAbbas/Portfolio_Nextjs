import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background : '#020024',
        backgroundColor: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)'
      }}
    >
        <div className={`${id ===6} && 'flex justify-center h-full`}>
            <div className="w-full h-full absolute">
                {img && (
                    <Image 
                        src={img}
                        alt={img}
                        fill
                        className={cn(imgClassName,'object-cover,object-center')}
                    />
                )

                }
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                {
                    spareImg && (
                        <Image 
                        src={spareImg}
                        alt={spareImg}
                        fill
                        className={'object-cover,object-center'}
                    />
                    )
                }
            </div>
            {
                id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center text-center text-white font-bold" />
                    </BackgroundGradientAnimation>
                )
            }
        </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
