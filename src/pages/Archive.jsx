import { Note } from "../components/Note";
const paraData = [
  "Lorem atat officia voluptate. Culpa proident adipisicingsunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
];
const Archive = () => {
  return (
    <div className=" container flex flex-col items-center lg:items-start px-2 py-4 mt-5">
      <h1 className="text-5xl">Archive</h1>
      <ul className="my-4 flex gap-8 md:gap-14">
        <li className="cursor-pointer relative active">All</li>
        <li className="cursor-pointer relative active">Todays</li>
        <li className="cursor-pointer relative">This Week</li>
        <li className="cursor-pointer relative">This Month</li>
      </ul>
      <div className="my-10 columns-1 gap-8 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {paraData.map((item, index) => (
          <Note key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
