import { trpc } from "../utils/trpc";
import { ChangeEvent, FormEvent, useState } from "react";

const HomePage = () => {
  const { isLoading, data: books } = trpc.books.getAllBooks.useQuery();
  if (isLoading) return <h1>loading</h1>;
  if (!books) return <h1>error</h1>;

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <AddBookBook />
      <ul className="flex flex-col gap-2">
        {books.map((book) => (
          <li className="py-2 bg-gray-100 text-black text-sm ">{book.title}</li>
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
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <input value={form["title"]} name="title" onChange={handleInputChange} />
        <input value={form["description"]} name="description" onChange={handleInputChange} />
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
