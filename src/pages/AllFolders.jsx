import { Folder } from "../components/Folder";

const AllFolders = () => {
  return (
    <div className=" container px-2 py-4 mt-5 flex flex-col items-center lg:items-start">
      <h1 className="text-5xl">All Folders</h1>
      <ul className="my-4 flex gap-8 md:gap-14">
        <li className="cursor-pointer text-sm md:text-md relative active">
          All
        </li>
        <li className="cursor-pointer text-sm md:text-md relative active">
          Todays
        </li>
        <li className="cursor-pointer text-sm md:text-md relative">
          This Week
        </li>
        <li className="cursor-pointer text-sm md:text-md relative">
          This Month
        </li>
      </ul>
      <div className="my-10 gap-8 flex flex-wrap justify-center lg:justify-start">
        {paraData.map((_, index) => (
          <Folder key={index} home={false} />
        ))}
      </div>
    </div>
  );
};

export default AllFolders;

const paraData = [
  "Lorem atat officia voluptate. Culpa proident adipisicingsunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem atat officia voluptate. Culpa proident adipisicingsunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem atat officia voluptate. Culpa proident adipisicingsunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  "Lorem  reprehenderit commodo officia dolor Lorem duis la eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
];
