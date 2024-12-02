import Layout from "../../components/Layout";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Productpage() {
  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate("/AddProduct"); // Navigate to AddProduct path
  };  

  const handleRowClick = (productId) => {
    navigate(`/ProductDetail/${productId}`); // Navigate to ProductDetail with productId
  };

  const mockData = [
    { id: "BLINK-MEMBERSHIP", name: "BLINK MEMBERSHIP", price: "Rp.350.000", sales: "1.200 sold", image: "/product/BLINK MEMBERSHIP.png" },
    { id: "LALISA-PHOTOBOOK", name: "LALISA- PHOTOBOOK [SPECIAL EDITION]", price: "Rp.615.000", sales: "437 sold", image: "/product/LALISA- PHOTOBOOK [SPECIAL EDITION].jpg" },
    { id: "TREASURE-HOODIE", name: "TREASURE HOODIE", price: "Rp.1.125.000", sales: "154 sold", image: "/product/TREASURE HOODIE.png" },
    { id: "JISOO-BRACELET", name: "JISOO BRACELET", price: "Rp.430.000", sales: "273 sold", image: "/product/JISOO BRACELET.png" },
    { id: "2022-WELCOMING", name: "2022 Welcoming Collection", price: "Rp.615.000", sales: "846 sold", image: "/product/2022 Welcoming Collection.png" },
    { id: "TREASURE-TUMBLER", name: "TREASURE TUMBLER", price: "Rp.465.000", sales: "591 sold", image: "/product/TREASURE TUMBLER.png" },
    { id: "WINNER-MUG", name: "WINNER 10TH ANNIVERSARY MUG", price: "Rp.345.000", sales: "926 sold", image: "/product/WINNER 10th ANNIVERSARRY MUG.png" },
    { id: "WINNER-BAG", name: "WINNER TRAVEL BAG", price: "Rp.555.000", sales: "172 sold", image: "/product/WINNER TRAVEL BAG.png" },
    { id: "TREASURE-SCRUNCHIE", name: "TREASURE SCRUNCHIE SET", price: "Rp.375.000", sales: "726 sold", image: "/product/TREASURE SCRUNCHIE SET.png" },
  ];

  return (
    <Layout>
      <div className="header-section">
        <h1 className="title">Product</h1>
        <button className="add-product-btn" onClick={handleAddProductClick}>Add Product</button>
      </div>

      <div className="product-table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((product) => (
              <tr
                key={product.id}
                className="clickable-row"
                onClick={() => handleRowClick(product.id)} // Navigate to Product Detail page with ID
              >
                <td>
                  <div className="product-info">
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Productpage;
