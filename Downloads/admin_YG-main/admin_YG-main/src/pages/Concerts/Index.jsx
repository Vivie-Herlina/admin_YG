import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import Layout from "../../components/Layout"; // Import Layout
import "./style.css";

const concerts = [
  {
    id: 1,
    image: "/concerts/konser_trea.jpg",
    title: 'TREASURE - "Relay Tour Reboot"',
  },
  {
    id: 2,
    image: "/concerts/konser_bm.jpeg",
    title: 'BABY MONSTER - "See You There"',
  },
  {
    id: 3,
    image: "/concerts/konser_bp.jpg",
    title: 'BLACK PINK - "Pinkcarpet & Pinkstart Greeting"',
  },
];

const Concerts = () => {
  const navigate = useNavigate(); // Hook navigasi

  return (
    <Layout> {/* Wrapper dengan Layout */}
      <section className="concert-section">
        <div className="concert-header">
          <h2>Concert & Event</h2>
          <button
            className="add-artist-btn"
            onClick={() => navigate("/addconcerts")} // Perbaiki rute navigasi
            >
            Add Concert or Event
            </button>
        </div>
        <div className="concert-grid">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="concert-card"
              onClick={() => navigate(`/concerts/${concert.id}`)} // Navigasi ke detail
            >
              <img src={concert.image} alt={concert.title} />
              <p>{concert.title}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Concerts;
