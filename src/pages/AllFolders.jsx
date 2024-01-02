import { Folder } from "../components/Folder";
import { TimeSort } from "../components/TimeSort";

const AllFolders = () => {
  return (
    <div className=" container px-2 py-4 mt-5 flex flex-col items-center lg:items-start">
      <h1 className="text-5xl">All Folders</h1>
      <TimeSort />
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
