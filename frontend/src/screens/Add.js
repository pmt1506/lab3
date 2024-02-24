import { useState, useEffect } from "react";

const Add = () => {
  // Fetch categories list from localhost:9999/categories
  const [categories, setCategories] = useState([]);
  const [imagesInfo, setImagesInfo] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
  });

  useEffect(() => {
    fetch("http://localhost:9999/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []); // Empty dependency array to run the effect only once when the component mounts

  useEffect(() => {
    // Update formData.images whenever imagesInfo changes
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: imagesInfo.map((imageInfo) => ({
        base64: imageInfo.base64,
        size: imageInfo.size,
        name: imageInfo.name,
      })),
    }));
  }, [imagesInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Check if files are selected and they have valid image extensions
    if (files.length > 0 && areValidImageFiles(files)) {
      const newImagesInfo = Array.from(files).map((file) => ({
        base64: "",
        size: file.size,
        name: file.name,
      }));

      setImagesInfo(newImagesInfo);

      // Loop through files and process each one
      Array.from(files).forEach((file, index) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          setImagesInfo((prevImagesInfo) => {
            const updatedImagesInfo = [...prevImagesInfo];
            updatedImagesInfo[index].base64 = reader.result;
            return updatedImagesInfo;
          });
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const areValidImageFiles = (files) => {
    // Define accepted image extensions
    const validExtensions = ["jpg", "jpeg", "png", "gif"];

    // Check if all files have valid image extensions
    return Array.from(files).every((file) => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      return validExtensions.includes(fileExtension);
    });
  };

  const formatFileSize = (size) => {
    if (size >= 1048576) {
      return (size / 1048576).toFixed(2) + " MB";
    } else {
      return (size / 1024).toFixed(2) + " KB";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data when the form is submitted
    console.log("Form Data:", formData);
  };

  return (
    <div className="container">
      <h1 className="text-center">Add new Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter product price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Images</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        {/* Display the selected images and information */}
        {imagesInfo.length > 0 && (
          <div className="form-group">
            <label>Selected Images</label>
            {imagesInfo.map((imageInfo, index) => (
              <div key={index}>
                <img
                  src={imageInfo.base64}
                  alt={`Selected ${index}`}
                  className="img-thumbnail"
                />
                <p>File Name: {imageInfo.name}</p>
                <p>File Size: {formatFileSize(imageInfo.size)}</p>
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
