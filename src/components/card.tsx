import type { IPerson } from "../interfaces";

export const Card = ({ person, color }: { person: IPerson; color: string }) => {
  console.log("color", color);
  return (
    <div
      className={`m-4 p-4 border-1 rounded-lg grid grid-cols-5 grid-rows-3 gap-0 min-w-[350px] `}
    >
      <div className="col-span-3">
        <div className="grid grid-cols-3 grid-rows-1 gap-4 ">
          <div className="">
            <img
              src={person.avatar}
              alt="avatar"
              className="min-w-16 rounded-full"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-[Barlow Condensed] text-[1.25rem] font-semibold ">
              {person.name}
            </h2>
            {person.verified && (
              <p className="font-[Barlow Condensed] text-sm ">
                Verified Graduate
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-5 row-start-2">
        <p className="font-[Barlow Condensed] text-[1.25rem]">{person.title}</p>
      </div>
      <div className="col-span-5 row-span-2 row-start-3">
        <p className="font-[Barlow Condensed] text-sm">{person.description}</p>
      </div>
    </div>
  );
};
