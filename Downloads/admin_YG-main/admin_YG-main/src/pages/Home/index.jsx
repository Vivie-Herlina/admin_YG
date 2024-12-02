import Layout from "../../components/Layout";
import "./style.css";
import Chart from "react-apexcharts";

const DATA_CHART = {
  visitor: {
    options: {
      chart: {
        id: "visitor",
      },
      colors: ["#007af5", "#a0a0a0"],
      dataLabels: {
        enabled: false, // Disable labels on the bars
      },
      legend: {
        labels: {
          colors: "#fff", // Custom color for legend text
        },
      },
      xaxis: {
        categories: [10, 11, 12, 13, 14, 15, 16, 17],
        labels: {
          style: {
            colors: "#fff", // Custom colors for each label
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff", // Custom colors for each label
          },
        },
      },
    },
    series: [
      {
        name: "This Week",
        data: [10, 20, 30, 40, 50, 60, 70, 80],
        fillColor: "red",
      },
      {
        name: "Last Week",
        data: [9, 29, 20, 30, 59, 160, 120, 180],
      },
    ],
  },
  sales: {
    options: {
      chart: {
        id: "sales",
      },
      colors: ["#007af5", "#a0a0a0"],
      dataLabels: {
        enabled: false, // Disable labels on the bars
      },
      legend: {
        labels: {
          colors: "#fff", // Custom color for legend text
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        labels: {
          style: {
            colors: "#fff", // Custom colors for each label
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff", // Custom colors for each label
          },
        },
      },
    },
    series: [
      {
        name: "This Year",
        data: [
          3000000, 1500000, 2000000, 5000000, 2000000, 1230000, 9920000,
          3000000,
        ],
        fillColor: "red",
      },
      {
        name: "Last Year",
        data: [
          1000000, 2000000, 4500000, 1000000, 9000000, 9000000, 1200000,
          1300000,
        ],
      },
    ],
  },
};

function Homepage() {
  return (
    <Layout>
      <h1 className="title">Dashboard</h1>

      {/* <!-- Statistics --> */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="card-header">
            <span>Online Visitors</span>
            <a href="#">View Report</a>
          </div>
          <div className="card-body">
            <p>960</p>
            <span>Visitor Over Time</span>
            <span className="percentage">⬆ 24% Since Last week</span>
            {/* <!-- Insert chart here --> */}
            <div className="chart-placeholder">
              <Chart
                options={DATA_CHART.visitor.options}
                series={DATA_CHART.visitor.series}
                type="line"
                width="100%"
                height="350"
              />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="card-header">
            <span>Sales</span>
            <a href="#">View Report</a>
          </div>
          <div className="card-body">
            <p>Rp134.000.000</p>
            <span>Sales Over Time</span>
            <span className="percentage">⬆ 33% Since Last Month</span>
            {/* <!-- Insert chart here --> */}
            <div className="chart-placeholder">
              <Chart
                options={DATA_CHART.sales.options}
                series={DATA_CHART.sales.series}
                type="bar"
                width="100%"
                height="350"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Product Table --> */}
      <div className="product-section">
        <h2>Product</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product-info">
                  <img
                    src="/home/BLINK MEMBERSHIP.png"
                    alt="BLINK MEMBERSHIP"
                  />
                  <span>BLINK MEMBERSHIP</span>
                </div>
              </td>
              <td>Rp350.000</td>
              <td>1,200 sold</td>
            </tr>
            <tr>
              <td>
                <div className="product-info">
                  <img
                    src="/home/LISA -LALISA- PHOTOBOOK [SPECIAL EDITION].png"
                    alt="LALISA PHOTOBOOK"
                  />
                  <span>LALISA- PHOTOBOOK [SPECIAL EDITION]</span>
                </div>
              </td>
              <td>Rp615.000</td>
              <td>437 sold</td>
            </tr>
            <tr>
              <td>
                <div className="product-info">
                  <img src="/home/TREASURE HOODIE.png" alt="TREASURE HOODIE" />
                  <span>TREASURE HOODIE</span>
                </div>
              </td>
              <td>Rp1.125.000</td>
              <td>154 sold</td>
            </tr>
            <tr>
              <td>
                <div className="product-info">
                  <img src="/home/JISOO BRACELET.png" alt="JISOO BRACELET" />
                  <span>JISOO BRACELET</span>
                </div>
              </td>
              <td>Rp430.000</td>
              <td>273 sold</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Homepage;
