import { useState, useEffect } from "react";

const Add = () => {
  // Fetch categories list from localhost:9999/categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="container">
      <h1 className="text-center">Add</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="form-control">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="file" className="form-control" multiple />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
