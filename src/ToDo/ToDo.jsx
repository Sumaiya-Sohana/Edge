import { useState } from "react";

const ToDo = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    if (!formData.title || !formData.author || !formData.isbn || !formData.email) {
      alert("Please fill out all fields");
      return;
    }

    setBooks([...books, formData]);
    setFormData({ title: "", author: "", isbn: "", email: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Library Book Management</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">ISBN</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-red-500 p-4">
                No books available. Add some!
              </td>
            </tr>
          ) : (
            books.map((book, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author}</td>
                <td className="border p-2">{book.isbn}</td>
                <td className="border p-2">{book.email}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setBooks(books.filter((_, i) => i !== index))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;