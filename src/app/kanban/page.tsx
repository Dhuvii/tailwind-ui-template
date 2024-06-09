import KandbanCard from "../components/KanbanCard";

const applied = [
  {
    name: "Amy Litchy",
    date: "3 days ago",
    image:
      "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 80,
  },
  {
    name: "Doug Jacobs",
    date: "2 days ago",
    image:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 65,
  },
  {
    name: "Enrique Aguilar",
    date: "5 days ago",
    image:
      "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 25,
  },
];

const phoneScreening = [
  {
    name: "Enrique Aguilar",
    date: "5 days ago",
    image:
      "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 15,
  },
  {
    name: "Amy Litchy",
    date: "3 days ago",
    image:
      "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 80,
  },
];

const interview = [
  {
    name: "Doug Jacobs",
    date: "2 days ago",
    image:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 85,
  },
];

const page = () => {
  return (
    <div className="h-screen p-10">
      <div className="flex h-full justify-start gap-3">
        {/* cards holder */}
        <div className="flex max-w-72 flex-1 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-gray-100 pb-[0.3rem]">
          <p className="mb-[calc(1rem-0.3rem)] mt-4 px-3 text-sm font-medium text-gray-950">
            Applied
          </p>

          <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-[0.3rem] pb-[0.1rem]">
            {/* cards */}
            {applied.map(({ name, date, image, match }, idx) => (
              <KandbanCard
                key={idx}
                name={name}
                date={date}
                image={image}
                match={match}
              />
            ))}

            {/* add applicant card */}
            <div className="flex h-[7rem] items-center justify-center rounded-lg border-2 border-dashed border-gray-950/10 bg-transparent p-4">
              <p className="text-sm text-gray-500">Add Applicant</p>
            </div>
            {/* add applicant card */}
            {/* cards */}
          </div>
        </div>
        {/* cards holder */}

        {/* cards holder */}
        <div className="flex max-w-72 flex-1 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-gray-100 pb-[0.3rem]">
          <p className="mb-[calc(1rem-0.3rem)] mt-4 px-3 text-sm font-medium text-gray-950">
            Phone screening
          </p>

          <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-[0.3rem] pb-[0.1rem]">
            {/* cards */}
            {phoneScreening.map(({ name, date, image, match }, idx) => (
              <KandbanCard
                key={idx}
                name={name}
                date={date}
                image={image}
                match={match}
              />
            ))}

            {/* add applicant card */}
            <div className="flex h-[7rem] items-center justify-center rounded-lg border-2 border-dashed border-gray-950/10 bg-transparent p-4">
              <p className="text-sm text-gray-500">Add Applicant</p>
            </div>
            {/* add applicant card */}
            {/* cards */}
          </div>
        </div>
        {/* cards holder */}

        {/* cards holder */}
        <div className="flex max-w-72 flex-1 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-gray-100 pb-[0.3rem]">
          <p className="mb-[calc(1rem-0.3rem)] mt-4 px-3 text-sm font-medium text-gray-950">
            Interview
          </p>

          <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-[0.3rem] pb-[0.1rem]">
            {/* cards */}
            {interview.map(({ name, date, image, match }, idx) => (
              <KandbanCard
                key={idx}
                name={name}
                date={date}
                image={image}
                match={match}
              />
            ))}

            {/* add applicant card */}
            <div className="flex h-[7rem] items-center justify-center rounded-lg border-2 border-dashed border-gray-950/10 bg-transparent p-4">
              <p className="text-sm text-gray-500">Add Applicant</p>
            </div>
            {/* add applicant card */}
            {/* cards */}
          </div>
        </div>
        {/* cards holder */}
      </div>
    </div>
  );
};

export default page;
