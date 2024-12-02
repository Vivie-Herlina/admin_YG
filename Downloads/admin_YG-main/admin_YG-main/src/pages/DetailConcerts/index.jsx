import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout"; // Layout yang sama digunakan
import "./style.css";

// Data konser (dapat diintegrasikan ke database atau API nantinya)
const concerts = [
    {
      id: 1,
      image: "/concerts/konser_trea.jpg",
      title: 'TREASURE - "Relay Tour Reboot"',
      artistName: "TREASURE",
      description: "Konser yang akan memukau semua fans Treasure Maker...",
      date: "12 Desember 2024",
      location: "Stadion Utama Gelora Bung Karno, Jakarta",
    },
    {
      id: 2,
      image: "/concerts/konser_bm.jpeg",
      title: 'BABY MONSTER - "See You There"',
      artistName: "BABY MONSTER",
      description: "Konser debut penuh emosional dari Baby Monster...",
      date: "8 Januari 2025",
      location: "Istora Senayan, Jakarta",
    },
    {
      id: 3,
      image: "/concerts/konser_bp.jpg",
      title: 'BLACK PINK - "Pinkcarpet & Pinkstart Greeting"',
      artistName: "BLACKPINK",
      description: "This event is part of BLACKPINK World Tour: Born Pink in cinemas with a special session called Pinkcarpet & Pinkstage Writing which took place on August 9. In this event, fans have the opportunity to see firsthand the special performances of BLACKPINK members before or after the film concert is shown in cinemas. Pinkcarpet provides a red carpet event-like experience where fans can see their idols, while Pinkstage Salam involves greetings or brief interactions from BLACKPINK members. This event is designed to increase engagement and provide a unique experience for BLACKPINK fans around the world.",
      date: "5 Februari 2025",
      location: "ICE BSD, Tangerang",
    },
  ];
  

const ConcertDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const concert = concerts.find((c) => c.id === parseInt(id)); // Cari konser sesuai ID

  if (!concert) {
    return (
      <Layout>
        <p>Concert not found!</p>
      </Layout>
    );
  }

  // State untuk mengelola form dan apakah form dalam mode edit
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    artistName: concert.artistName,
    concertName: concert.title,
    location: concert.location,
    date: concert.date,
    eventDescription: concert.description,
  });

  // Fungsi untuk mengubah nilai dalam form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani klik Edit
  const handleEdit = () => {
    setIsEditable(true);
  };

  // Fungsi untuk menangani klik Save
  const handleSave = () => {
    setIsEditable(false);
    // Di sini, Anda bisa simpan data ke server atau lakukan pengolahan lain
    console.log("Data Saved:", formData);
    alert("Changes Saved!");
  };

  return (
    <Layout>
      <div className="concert-detail">
        <img
          src={concert.image}
          alt={concert.title}
          className="concert-detail-image"
        />

        <form>
          <div className="artist-concert">
            <div>
              <label>Artist Name</label>
              <input
                type="text"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div>
              <label>Concert or Event Name</label>
              <input
                type="text"
                name="concertName"
                value={formData.concertName}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
          </div>

          <div className="location-date">
            <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div>
              <label>Date</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
          </div>

          <div>
            <label>Concert & Event Descriptions</label>
            <textarea
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
                disabled={!isEditable}
            />
            </div>


          <div className="btn-container">
            <button
              type="button"
              onClick={handleEdit}
              disabled={isEditable}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!isEditable}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ConcertDetail;
