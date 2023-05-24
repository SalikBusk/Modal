import React from "react";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;

//   styles
  white?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  white,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div
        className={
          white
            ? "text-2xl sm:text-xl md:text-3xl font-bold text-[#fff]"
            : "text-2xl sm:text-xl md:text-3xl font-bold text-[#222]"
        }
      >
        {title}
      </div>
      <div
        className={
          white
            ? "font-light text-[#fff] mt-2"
            : "font-light text-neutral-500 mt-2"
        }
      >
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
