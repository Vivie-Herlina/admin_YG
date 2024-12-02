import React, { useState } from 'react';
import Layout from "../../components/Layout";  // Import Layout component
import './style.css';  // Custom styling

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    artist: '',
    type: '',
    price: '',
    stocks: '',
    description: '',
    image: null,  // Add state for the image
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result, // Set the base64 image data as formData
        });
      };
      reader.readAsDataURL(file); // Read file as base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <Layout> {/* Wrap the form inside the Layout component */}
      <div className="add-product-container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group image-upload">
              <label htmlFor="image-input">
                {formData.image ? (
                  <img src={formData.image} alt="Product" className="uploaded-image" />
                ) : (
                  <span>+</span>
                )}
              </label>
              <input
                type="file"
                id="image-input"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }} // Hide the actual file input
              />
            </div>
            <div className="form-group product-name">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group artist">
              <label>Artist</label>
              <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                placeholder="Enter artist name"
                required
              />
            </div>
            <div className="form-group type">
              <label>Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Enter product type"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group price">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter product price"
                required
              />
            </div>
            <div className="form-group stocks">
              <label>Stocks</label>
              <input
                type="number"
                name="stocks"
                value={formData.stocks}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                required
              />
            </div>
          </div>

          <div className="form-group description">
            <label>Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Add Product</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
