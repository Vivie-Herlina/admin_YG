import Layout from "../../components/Layout";
import "./style.css"; // Pastikan file CSS ada dan berfungsi

function DeliveryHistory() {
  const data = [
    { invoice: "INV-1087", status: "PAID", customer: "Ariana Letty", progress: "60%" },
    { invoice: "INV-1086", status: "REFUNDED", customer: "Indri Fania", progress: "80%" },
    { invoice: "INV-1085", status: "PAID", customer: "Indira Remaya", progress: "60%" },
    { invoice: "INV-1084", status: "PAID", customer: "Leka Aragan", progress: "20%" },
    { invoice: "INV-1083", status: "CANCELLED", customer: "Muchamad Nurza Bayu", progress: "40%" },
    { invoice: "INV-1082", status: "CANCELLED", customer: "Muchamad Nurza Bayu", progress: "10%" },
    { invoice: "INV-1081", status: "PAID", customer: "Shabrina Zahra", progress: "70%" },
    { invoice: "INV-1080", status: "PAID", customer: "Eveline Nazirah Kertapraja", progress: "90%" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "PAID":
        return "status-paid";
      case "REFUNDED":
        return "status-refunded";
      case "CANCELLED":
        return "status-cancelled";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className="header-section">
        <h1 className="title">Delivery History</h1> {/* Perbaiki judul */}
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.invoice}</td>
                <td className={getStatusClass(row.status)}>{row.status}</td>
                <td>{row.customer}</td>
                <td>{row.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default DeliveryHistory;
