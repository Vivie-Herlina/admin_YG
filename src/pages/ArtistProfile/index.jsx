import { useParams } from "react-router-dom";
import Layout from "../../components/Layout"; // pastikan Layout sudah tersedia
import "./style.css"; // sesuaikan dengan file CSS Anda

const ArtistProfile = () => {
  const { artistName } = useParams();

  // Data artis yang sudah digabungkan dalam satu file
  const artistData = [
    {
      id: "blackpink",
      name: "BLACKPINK",
      debutDate: "August 8, 2016",
      membersCount: 4,
      description: "A South Korean girl group formed by YG Entertainment, known for their powerful music and performances.",
      img: "/artist/blackpink.jpg",
      members: [
        {
          name: "Jisoo",
          dob: "January 3, 1995",
          description: "Jisoo is the lead vocalist and visual of BLACKPINK.",
          img: "/detail_artist/jisso.png", // Pastikan gambar berada di folder public/detail_artist
        },
        {
          name: "Jennie",
          dob: "January 16, 1996",
          description: "Jennie is the main rapper and vocalist of BLACKPINK.",
          img: "/detail_artist/jenni.png",
        },
        {
          name: "Rosé",
          dob: "February 11, 1997",
          description: "Rosé is the lead vocalist and lead dancer of BLACKPINK.",
          img: "/detail_artist/rose.png",
        },
        {
          name: "Lisa",
          dob: "March 27, 1997",
          description: "Lisa is the main dancer and sub-rapper of BLACKPINK.",
          img: "/detail_artist/lisa.png",
        },
      ],
    },
    {
      id: "treasure",
      name: "TREASURE",
      debutDate: "August 7, 2020",
      membersCount: 10,
      description: "TREASURE is a South Korean boy group formed by YG Entertainment, known for their energetic performances and strong vocals.",
      img: "/artist/treasuree.jpeg",
      members: [
        { name: "Choi Hyun suk", dob: "April 21, 1999", description: "Leader and rapper of TREASURE.", img: "/detail_artist/hyuksuk.jpg" },
        { name: "Jihoon", dob: "March 14, 2000", description: "Vocalist and rapper of TREASURE.", img: "/detail_artist/jihoon.jpg" },
        { name: "Yoshi", dob: "May 15, 2000", description: "Main rapper of TREASURE.", img: "/detail_artist/yoshi.jpg" },
        { name: "Junkyu", dob: "September 9, 2000", description: "Vocalist of TREASURE.", img: "/detail_artist/junkyu.jpg" },
        { name: "Yoon Jae Hyuk", dob: "July 23, 2001", description: "Lead vocalist of TREASURE.", img: "/detail_artist/jeahyuk.jpg" },
        { name: "Asahi", dob: "August 20, 2001", description: "Vocalist of TREASURE.", img: "/detail_artist/asahi.jpg" },
        { name: "Doyoung", dob: "December 4, 2003", description: "Vocalist and dancer of TREASURE.", img: "/detail_artist/doyoung.jpg" },
        { name: "Haruto", dob: "April 5, 2004", description: "Rapper of TREASURE.", img: "/detail_artist/haruto.jpg" },
        { name: "Park Jeong woo", dob: "September 4, 2004", description: "Vocalist of TREASURE.", img: "/detail_artist/jungwoo.jpg" },
        { name: "So Jung Hwan", dob: "February 9, 2005", description: "Vocalist and dancer of TREASURE.", img: "/detail_artist/jungwan.jpg" },
      ],
    },
    {
      id: "babymonster",
      name: "BABYMONSTER",
      debutDate: "TBA",
      membersCount: 7,
      description: "BABYMONSTER is a new girl group formed under YG Entertainment, which is gaining attention for their powerful talent.",
      img: "/detail_artist/baby.png",
      members: [
        { name: "Ruka", dob: "March 20, 2002", description: "Vocalist and dancer of BABYMONSTER.", img: "/detail_artist/ruka_bm.jpg" },
        { name: "Pharita", dob: "August 26, 2005", description: "Main rapper of BABYMONSTER.", img: "/detail_artist/pharita_bm.jpg" },
        { name: "Asa", dob: "April 17, 2006", description: "Vocalist of BABYMONSTER.", img: "/detail_artist/asa.jpg" },
        { name: "Ahyeon", dob: "April 11, 2007", description: "Vocalist of BABYMONSTER.", img: "/detail_artist/ahyeon_bm.jpg" },
        { name: "Rami", dob: "October 17, 2007", description: "Vocalist and dancer of BABYMONSTER.", img: "/detail_artist/rami_bm.jpg" },
        { name: "Rora", dob: "August 5, 2008", description: "Rapper of BABYMONSTER.", img: "/detail_artist/rora_bm.jpg" },
        { name: "Chiquita", dob: "February 17, 2009", description: "Dancer of BABYMONSTER.", img: "/detail_artist/chita_bm.jpg" },
      ],
    },
    {
      id: "winner",
      name: "WINNER",
      debutDate: "August 17, 2014",
      membersCount: 4,
      description: "WINNER is a South Korean boy group under YG Entertainment, recognized for their unique sound and artistry.",
      img: "/artist/win.jpg",
      members: [
        { name: "Jinu", dob: "September 26, 1991", description: "Lead vocalist of WINNER.", img: "/detail_artist/jinu.jpg" },
        { name: "Hoony", dob: "January 11, 1992", description: "Main vocalist of WINNER.", img: "/detail_artist/hony.jpg" },
        { name: "Mino", dob: "March 30, 1993", description: "Rapper and vocalist of WINNER.", img: "/detail_artist/mino.jpg" },
        { name: "Yoon", dob: "January 21, 1994", description: "Vocalist and rapper of WINNER.", img: "/detail_artist/yoon.jpg" },
      ],
    },
    {
      id: "akmu",
      name: "AKMU",
      debutDate: "April 7, 2014",
      membersCount: 2,
      description: "AKMU (Akdong Musician) is a South Korean duo known for their unique sound and powerful vocals.",
      img: "/artist/akmu.jpeg",
      members: [
        {
          name: "Lee Chan Hyuk",
          dob: "September 12, 1996",
          description: "He is the older brother and plays the guitar and composes most of their music.",
          img: "/detail_artist/CHAN-HYUK.jpg",
        },
        {
          name: "Lee Su Hyun",
          dob: "May 4, 1999",
          description: "Su Hyun is the younger sister and is known for her beautiful voice and piano skills.",
          img: "/detail_artist/SU-HYUN.jpg",
        },
      ],
    },
    {
      id: "eunjiwon",
      name: "Eun Jiwon",
      debutDate: "1997",
      membersCount: 1,
      description: "Eun Jiwon is a South Korean singer and rapper, who is known for his solo career as well as being a part of the group SECHSKIES.",
      img: "/detail_artist/eunjiwon.jpg",
      members: [],
    },
  ];

  // Mencari data artis berdasarkan nama
  const artist = artistData.find((artist) => artist.name.toLowerCase() === artistName.toLowerCase());

  if (!artist) {
    return <div>Artist not found!</div>;
  }

  return (
    <Layout>
      <div className="artist-profile">
        {/* Artist Main Section */}
        <div className="artist-main">
          <div className="artist-img-container">
            <img src={artist.img} alt={artist.name} className="artist-img" />
          </div>
          <div className="artist-info">
            <div className="form-group">
              <label>Artist Name</label>
              <input type="text" value={artist.name} readOnly />
            </div>
            <div className="form-group">
              <label>Artist Member</label>
              <input type="number" value={artist.membersCount} readOnly />
            </div>
            <div className="form-group">
              <label>Debut Date</label>
              <input type="text" value={artist.debutDate} readOnly />
            </div>
          </div>
        </div>

        {/* Artist Description */}
        <div className="artist-description">
          <label>Artist Description (optional)</label>
          <textarea value={artist.description} readOnly />
        </div>

        {/* Add Member Section */}
        <div className="add-member">
          {artist.members.map((member, index) => (
            <div className="member-row" key={index}>
              <div className="member-img-container">
                <img src={member.img} alt={member.name} className="member-img" />
              </div>
              <div className="member-info">
                <div className="form-group">
                  <label>Member Name</label>
                  <input type="text" value={member.name} readOnly />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input type="text" value={member.dob} readOnly />
                </div>
                <div className="form-group description">
                  <label>Member Description (optional)</label>
                  <textarea value={member.description} readOnly />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ArtistProfile;
