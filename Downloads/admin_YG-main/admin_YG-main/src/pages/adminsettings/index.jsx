import React from "react";
import Layout from "../../components/Layout"; // Import Layout
import "./style.css";

function Adminsettings() {
  return (
    <Layout>

        <div className="header-section">
                <h1 className="title">Setting</h1> {/* Perbaiki judul */}
            </div>
        <section class="content">
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label>Change Username</label>
                        <input type="text" placeholder="Enter new username"/>
                    </div>
                    <div class="form-group">
                        <label>Change Password</label>
                        <input type="password" placeholder="Enter new password"/>
                    </div>
                </div>
                <button type="submit" class="save-button">Save Changes</button>
            </form>
        </section>
    </Layout>
  );
}

export default Adminsettings;
