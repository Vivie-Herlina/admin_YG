import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Productpage from "./pages/Product";
import Artistpage from "./pages/Artist";
import AddArtist from "./pages/AddArtist";
import AddConcerts from "./pages/AddConcerts";
import Concerts from "./pages/Concerts";
import ConcertDetail from "./pages/DetailConcerts";
import ArtistProfile from "./pages/ArtistProfile";
import ProductDetail from "./pages/ProductDetail"; // Tambahkan halaman detail produk
import AddProduct from "./pages/AddProduct"; // Import AddProduct
import Adminsettings from "./pages/adminsettings";
import DeliveryHistory from "./pages/DeliveryHistory";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} /> {/* Halaman detail produk */}
        <Route path="/addproduct" element={<AddProduct />} /> {/* Add Product page */}
        <Route path="/artist" element={<Artistpage />} />
        <Route path="/addartist" element={<AddArtist />} />
        <Route path="/addconcerts" element={<AddConcerts />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/concerts/:id" element={<ConcertDetail />} />
        <Route path="/artist/:artistName" element={<ArtistProfile />} />
        <Route path="/adminsettings" element={<Adminsettings />} />
        <Route path="/DeliveryHistory" element={<DeliveryHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
