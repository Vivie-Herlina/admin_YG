import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./style.css";

const AddArtist = () => {
  const [artistImage, setArtistImage] = useState(null);
  const [members, setMembers] = useState([{ name: "", dob: "", description: "", image: null }]);

  const handleImageChange = (event, setImageCallback) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageCallback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addMember = () => {
    setMembers([...members, { name: "", dob: "", description: "", image: null }]);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  return (
    <Layout>
      <div className="main-content">
        <h2>Add Artist</h2>
        <div className="artist-section">
          {/* Rectangle for Artist Image */}
          <div className="artist-image">
            {artistImage ? (
              <img src={artistImage} alt="Artist" className="uploaded-image" />
            ) : (
              <label htmlFor="artistImage" className="upload-label">
                +
              </label>
            )}
            <input
              id="artistImage"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setArtistImage)}
              className="hidden-input"
            />
          </div>
          {/* Artist Details */}
          <div className="artist-details">
            <input
              type="text"
              placeholder="Artist Name"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Artist Members"
              className="form-input"
            />
            <input
              type="date"
              placeholder="Date of Birth Artist"
              className="form-input"
            />
          </div>
        </div>
        {/* Artist Description */}
        <textarea
          placeholder="Artist Description"
          className="artist-description"
          rows="4"
        ></textarea>

        <h2>Add Members</h2>
        {members.map((member, index) => (
          <div className="member-section" key={index}>
            {/* Rectangle for Member Image */}
            <div className="member-image">
              {member.image ? (
                <img src={member.image} alt="Member" className="uploaded-image" />
              ) : (
                <label htmlFor={`memberImage${index}`} className="upload-label">
                  +
                </label>
              )}
              <input
                id={`memberImage${index}`}
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(e, (img) => {
                    const updatedMembers = [...members];
                    updatedMembers[index].image = img;
                    setMembers(updatedMembers);
                  })
                }
                className="hidden-input"
              />
            </div>
            {/* Member Details */}
            <div className="member-details">
              <input
                type="text"
                placeholder="Member Name"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                className="member-input"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={member.dob}
                onChange={(e) =>
                  handleMemberChange(index, "dob", e.target.value)
                }
                className="member-input"
              />
              <textarea
                placeholder="Member Description"
                value={member.description}
                onChange={(e) =>
                  handleMemberChange(index, "description", e.target.value)
                }
                className="member-description"
                rows="3"
              ></textarea>
            </div>
          </div>
        ))}
        {/* Button Section */}
        <div className="button-container">
          <button className="add-member-btn" onClick={addMember}>
            Add More Member
          </button>
          <button className="submit-btn">Add Artist</button>
        </div>
      </div>
    </Layout>
  );
};

export default AddArtist;
