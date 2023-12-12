import { trpc } from "../utils/trpc";
import { ChangeEvent, FormEvent, useState } from "react";

const HomePage = () => {
  const { isLoading, data: books } = trpc.books.getAllBooks.useQuery();
  if (isLoading) return <h1>loading</h1>;
  if (!books) return <h1>error</h1>;

  return (
    <div className="w-full max-w-[500px] mx-auto pt-10">
      <AddBookBook />
      <ul className="grid grid-cols-2 gap-2 my-4">
        {books.map((book) => (
          <li
            key={book.id}
            className=" px-2 cursor-pointer hover:ring-2 hover:ring-blue-400 rounded-md  transitoin-all duration-300 py-4 bg-gray-100 text-black text-sm  "
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const initialForm = {
  title: "",
  description: "",
};
const AddBookBook = () => {
  const [form, setForm] = useState(initialForm);
  const mutateBooks = trpc.books.addBook.useMutation();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const utils = trpc.useUtils();
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutateBooks.mutate(
      {
        title: form.title,
        description: form.description,
      },
      {
        onSuccess: () => {
          utils.books.invalidate();
          setForm(initialForm);
        },
      },
    );
  };
  return (
    <div className="my-8">
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <input
          value={form["title"]}
          name="title"
          placeholder="title"
          onChange={handleInputChange}
          className="bg-gray-100 p-2 rounded-md"
        />
        <input
          value={form["description"]}
          name="description"
          placeholder="description"
          onChange={handleInputChange}
          className="bg-gray-100 p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md"
        >
          add
        </button>
      </form>
    </div>
  );
};
export default HomePage;
