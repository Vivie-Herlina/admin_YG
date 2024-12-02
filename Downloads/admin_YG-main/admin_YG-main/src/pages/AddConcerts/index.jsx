import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./style.css";

const AddConcerts = () => {
  const [concertImage, setConcertImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setConcertImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <div className="main-content">
        <h2>Concert & Event Image</h2>
        <div className="concert-image">
          {concertImage ? (
            <img src={concertImage} alt="Concert" className="uploaded-image" />
          ) : (
            <label htmlFor="concertImage" className="upload-label">
              +
            </label>
          )}
          <input
            id="concertImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden-input"
          />
        </div>

        {/* Form Section */}
        <h3>Add Concert or Event Details</h3>
        <div className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="artistName">Artist Name</label>
              <input
                type="text"
                id="artistName"
                placeholder="Artist Name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventName">Concert or Event Name</label>
              <input
                type="text"
                id="eventName"
                placeholder="Concert or Event Name"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Location"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group-full">
            <label htmlFor="eventDescription">Concert & Event Descriptions</label>
            <textarea
              id="eventDescription"
              placeholder="Concert & Event Descriptions"
              className="form-textarea"
              rows="3"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="button-container">
          <button className="submit-btn">Add Concert or Event</button>
        </div>
      </div>
    </Layout>
  );
};

export default AddConcerts;
