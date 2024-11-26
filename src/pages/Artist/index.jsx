import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout"; 
import "./style.css";

function AdminArtist() {
  const navigate = useNavigate();

  const artists = [
    { name: "BLACKPINK", img: "/artist/blackpink.jpg" },
    { name: "TREASURE", img: "/artist/treasuree.jpeg" },
    { name: "BABYMONSTER", img: "/artist/baby.png" },
    { name: "AKMU", img: "/artist/akmu.jpeg" },
    { name: "WINNER", img: "/artist/win.jpg" },
    { name: "EUN JIWON", img: "/detail_artist/eunjiwon.jpg" },
  ];

  const handleArtistClick = (artistName) => {
    navigate(`/artist/${artistName}`);
  };

  return (
    <Layout>
      <div className="admin-artist-container">
        {/* Header */}
        <div className="header-section">
          <h1 className="title">Artists</h1>
          <button
            className="add-artist-btn"
            onClick={() => navigate("/addartist")}
          >
            Add Artist
          </button>
        </div>

        {/* Artist Grid */}
        <div className="artist-grid-container">
          {artists.map((artist, index) => (
            <div
              className="artist-card"
              key={index}
              onClick={() => handleArtistClick(artist.name)}
            >
              <img src={artist.img} alt={artist.name} className="artist-img" />
              <p className="artist-name">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AdminArtist;
