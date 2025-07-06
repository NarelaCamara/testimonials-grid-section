import { colors, type Color, type IPerson } from "../interfaces";
import quotation from "../assets/bg-pattern-quotation.svg";

export const Card = ({
  person,
  color,
  icon,
}: {
  person: IPerson;
  color: Color;
  icon: boolean;
}) => {
  return (
    <div
      className={`p-8 border-0 rounded-lg min-w-full ${color} min-h-full z-20`}
    >
      {icon && (
        <img
          src={quotation}
          alt="avatar"
          className={`w-[104px] z-10 absolute`}
        />
      )}

      <div className="flex flex-row items-center">
        <div
          className={`mr-4 rounded-full ${
            color === colors[0] || color === colors[4]
              ? "border-[#A775F1] border-2 "
              : " "
          }`}
        >
          <img
            src={person.avatar}
            alt="avatar"
            className={`max-w-8  rounded-full `}
          />
        </div>
        <div className="">
          <h2
            className={`font-[Barlow Condensed] text-[0.8125rem]  ${
              color === colors[2] ? "font-[#676D7E]" : "text-white "
            }`}
          >
            {person.name}
          </h2>
          {person.verified && (
            <p
              className={`font-[Barlow Condensed] text-[0.6875rem] ${
                color === colors[2] ? "font-[#676D7E]" : "text-white "
              }`}
            >
              Verified Graduate
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-1">
        <div className="col-span-2">
          <p
            className={`font-[Barlow Condensed] font-semibold text-[1.25rem] py-4 ${
              color === colors[2] ? "font-[#48556A]" : "text-white "
            }`}
          >
            {person.title}
          </p>
        </div>
        <div className="col-span-2 row-start-2">
          <p
            className={`font-[Barlow Condensed] text-[0.8125rem] ${
              color === colors[2] ? "font-[#676D7E]" : "text-white "
            }`}
          >
            {person.description}
          </p>
        </div>
      </div>
    </div>
  );
};
