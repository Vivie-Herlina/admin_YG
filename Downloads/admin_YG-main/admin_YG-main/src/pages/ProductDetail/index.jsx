import Layout from "../../components/Layout";
import "./style.css";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";

// Data produk yang lebih lengkap
const PRODUCTS = {
  "BLINK-MEMBERSHIP": {
    name: "BLINK MEMBERSHIP",
    artist: "BLACKPINK",
    type: "Membership",
    price: "Rp350.000",
    stocks: "2.000",
    releaseDate: "2023-08-15",
    rating: 4.8,
    category: "Fan Club",
    description:
      "Product Name: BLINK MEMBERSHIP. Producer: YG ENTERTAINMENT Inc. Terms: You must use the identical account for YGConnect and YGConnect Shop to receive benefits.",
    image: "/product/BLINK MEMBERSHIP.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [100, 200, 300, 400, 500, 600, 700, 800], // Penjualan tahun ini
      salesLastYear: [80, 150, 220, 350, 450, 580, 650, 750], // Penjualan tahun lalu
    },
  },
  "LALISA-PHOTOBOOK": {
    name: "LALISA- PHOTOBOOK [SPECIAL EDITION]",
    artist: "LALISA",
    type: "Photobook",
    price: "Rp615.000",
    stocks: "1.500",
    releaseDate: "2023-05-10",
    rating: 4.9,
    category: "Photobook",
    description:
      "LALISA- PHOTOBOOK Special Edition. Features exclusive images of LALISA. A must-have for every fan!",
    image: "/product/LALISA- PHOTOBOOK [SPECIAL EDITION].jpg",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [150, 250, 350, 450, 550, 650, 750, 850],
      salesLastYear: [100, 200, 300, 400, 500, 600, 700, 800],
    },
  },
  "TREASURE-HOODIE": {
    name: "TREASURE HOODIE",
    artist: "TREASURE",
    type: "Hoodie",
    price: "Rp1.125.000",
    stocks: "1.200",
    releaseDate: "2023-07-25",
    rating: 4.7,
    category: "Apparel",
    description:
      "TREASURE HOODIE is a stylish, comfortable hoodie made for all TREASURE fans. Perfect for casual wear and winter season.",
    image: "/product/TREASURE HOODIE.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [200, 300, 400, 500, 600, 700, 800, 900],
      salesLastYear: [150, 250, 350, 450, 550, 650, 750, 850],
    },
  },
  "JISOO-BRACELET": {
    name: "JISOO BRACELET",
    artist: "BLACKPINK",
    type: "Bracelet",
    price: "Rp430.000",
    stocks: "900",
    releaseDate: "2023-06-10",
    rating: 4.6,
    category: "Accessories",
    description:
      "JISOO BRACELET is a high-quality, stylish bracelet designed by JISOO for her fans. A perfect gift for BLACKPINK supporters.",
    image: "/product/JISOO BRACELET.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [180, 250, 330, 400, 480, 560, 640, 720],
      salesLastYear: [150, 220, 290, 380, 460, 520, 600, 690],
    },
  },
  "WINNER-10TH-ANNIVERSARY-MUG": {
    name: "WINNER 10TH ANNIVERSARY MUG",
    artist: "WINNER",
    type: "Mug",
    price: "Rp345.000",
    stocks: "1.000",
    releaseDate: "2023-09-20",
    rating: 4.5,
    category: "Merchandise",
    description:
      "WINNER 10TH ANNIVERSARY MUG is a commemorative mug to celebrate 10 years of WINNER. A great addition to any fan's collection.",
    image: "/product/WINNER 10th ANNIVERSARY MUG.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [120, 210, 300, 400, 480, 560, 640, 720],
      salesLastYear: [100, 180, 250, 320, 400, 470, 550, 620],
    },
  },
  "TREASURE-SCRUNCHIE-SET": {
    name: "TREASURE SCRUNCHIE SET",
    artist: "TREASURE",
    type: "Accessories",
    price: "Rp375.000",
    stocks: "1.000",
    releaseDate: "2023-07-05",
    rating: 4.6,
    category: "Accessories",
    description:
      "TREASURE SCRUNCHIE SET includes several high-quality, stylish scrunchies designed for TREASURE fans. Wear them for a cute look.",
    image: "/product/TREASURE SCRUNCHIE SET.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [220, 330, 450, 540, 630, 720, 800, 900],
      salesLastYear: [180, 270, 360, 450, 540, 630, 710, 800],
    },
  },
  "WINNER-TRAVEL-BAG": {
    name: "WINNER TRAVEL BAG",
    artist: "WINNER",
    type: "Travel Bag",
    price: "Rp555.000",
    stocks: "850",
    releaseDate: "2023-05-30",
    rating: 4.7,
    category: "Apparel",
    description:
      "WINNER TRAVEL BAG is a durable, stylish travel bag designed for WINNER fans. Ideal for carrying your essentials while on the go.",
    image: "/product/WINNER TRAVEL BAG.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [150, 200, 300, 400, 500, 600, 700, 800],
      salesLastYear: [120, 180, 250, 330, 400, 480, 540, 600],
    },
  },
  "TREASURE-TUMBLER": {
    name: "TREASURE TUMBLER",
    artist: "TREASURE",
    type: "Tumbler",
    price: "Rp465.000",
    stocks: "950",
    releaseDate: "2023-06-12",
    rating: 4.8,
    category: "Merchandise",
    description:
      "TREASURE TUMBLER is a high-quality, durable tumbler designed for TREASURE fans. Keep your drinks cold or hot while showing off your support.",
    image: "/product/TREASURE TUMBLER.png",
    salesData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      salesThisYear: [250, 350, 450, 550, 650, 750, 850, 950],
      salesLastYear: [200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

function ProductDetail() {
    const { productId } = useParams(); // Mendapatkan productId dari URL
  
    // Cek apakah produk ada di dalam data
    const product = PRODUCTS[productId];
  
    if (!product) {
      return <div>Product not found</div>; // Jika produk tidak ditemukan, tampilkan pesan error
    }
  
    // Data grafik penjualan (Line Chart)
    const salesLineChartOptions = {
      chart: {
        id: "sales-line-chart",
      },
      colors: ["#007af5", "#a0a0a0"], // Warna grafik
      dataLabels: {
        enabled: false, // Nonaktifkan label di grafik
      },
      legend: {
        labels: {
          colors: "#fff", // Warna label legend
        },
      },
      xaxis: {
        categories: product.salesData.categories, // Menampilkan kategori (misalnya bulan)
        labels: {
          style: {
            colors: "#fff", // Warna label sumbu X
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff", // Warna label sumbu Y
          },
        },
      },
    };
  
    const salesLineChartSeries = [
      {
        name: "This Year",
        data: product.salesData.salesThisYear, // Penjualan tahun ini
      },
      {
        name: "Last Year",
        data: product.salesData.salesLastYear, // Penjualan tahun lalu
      },
    ];
  
    // Data grafik batang (Bar Chart)
    const salesBarChartOptions = {
      chart: {
        id: "sales-bar-chart",
      },
      colors: ["#ff8c00", "#32cd32"], // Warna grafik batang
      dataLabels: {
        enabled: false, // Nonaktifkan label di grafik batang
      },
      legend: {
        labels: {
          colors: "#fff", // Warna label legend
        },
      },
      xaxis: {
        categories: product.salesData.categories, // Menampilkan kategori (misalnya bulan)
        labels: {
          style: {
            colors: "#fff", // Warna label sumbu X
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff", // Warna label sumbu Y
          },
        },
      },
    };
  
    const salesBarChartSeries = [
      {
        name: "This Year",
        data: product.salesData.salesThisYear, // Penjualan tahun ini
      },
      {
        name: "Last Year",
        data: product.salesData.salesLastYear, // Penjualan tahun lalu
      },
    ];
  
    return (
      <Layout>
        <section className="product-detail-section">
          <h2>Product Detail</h2>
  
          <div className="product-info">
            <div className="product-image">
              
              <div className="image-placeholder">
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="product-form">
              <div>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name="product-name" value={product.name} readOnly />
              </div>
              <div>
                <label htmlFor="artist">Artist</label>
                <input type="text" id="artist" name="artist" value={product.artist} readOnly />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" value={product.category} readOnly />
              </div>
              <div>
                <label htmlFor="type">Type</label>
                <input type="text" id="type" name="type" value={product.type} readOnly />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" value={product.price} readOnly />
              </div>
              <div>
                <label htmlFor="stocks">Stocks</label>
                <input type="text" id="stocks" name="stocks" value={product.stocks} readOnly />
              </div>
              <div>
                <label htmlFor="releaseDate">Release Date</label>
                <input type="text" id="releaseDate" name="releaseDate" value={product.releaseDate} readOnly />
              </div>
              <div>
                <label htmlFor="rating">Rating</label>
                <input type="text" id="rating" name="rating" value={product.rating} readOnly />
              </div>
            </div>
          </div>
  
          <label id="description">Product Descriptions</label>
          <textarea value={product.description} readOnly />
  
          {/* Container untuk grafik-grafik */}
          <div className="sales-charts-container">
            {/* Grafik Penjualan - Line Chart */}
            <div className="sales-line-chart">
              <h3>Sales Performance (Line Chart)</h3>
              <Chart
                options={salesLineChartOptions}
                series={salesLineChartSeries}
                type="line" // Jenis grafik yang digunakan (line chart)
                width="100%"
                height="350"
              />
            </div>
  
            {/* Grafik Penjualan - Bar Chart */}
            <div className="sales-bar-chart">
              <h3>Sales Performance (Bar Chart)</h3>
              <Chart
                options={salesBarChartOptions}
                series={salesBarChartSeries}
                type="bar" // Jenis grafik yang digunakan (bar chart)
                width="100%"
                height="350"
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
  export default ProductDetail;