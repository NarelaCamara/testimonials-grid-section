import { colors, type Color, type IPerson } from "../interfaces";

export const Card = ({ person, color }: { person: IPerson; color: Color }) => {
  return (
    <div
      className={`p-8 border-0 rounded-lg min-w-[21.875rem] ${color} min-h-full`}
    >
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <div className="col-span-1">
          <img
            src={person.avatar}
            alt="avatar"
            className="min-w-16 rounded-full"
          />
        </div>
        <div className="col-span-3">
          <h2
            className={`font-[Barlow Condensed] text-[1.25rem] font-semibold ${
              color === colors[2] ? "font-[#676D7E]" : "text-white "
            }`}
          >
            {person.name}
          </h2>
          {person.verified && (
            <p
              className={`font-[Barlow Condensed] text-[0.8125rem] ${
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
            className={`font-[Barlow Condensed] text-[1.25rem] py-4 ${
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
