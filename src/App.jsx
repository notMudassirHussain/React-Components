import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">
              <strong>Analytics</strong> Dashboard
            </h1>
            <div className="row">
              <div className="col-xl-6 col-xxl-5 d-flex">
                <div className="w-100">
                  <div className="row">
                    <div className="col-sm-6">
                      <Card
                        title="Sales"
                        value="2,382"
                        icon="truck"
                        change={{ direction: "danger", value: -3.65 }}
                        description="Since last week"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Card
                        title="Visitors"
                        value="1,528"
                        icon="users"
                        change={{ direction: "success", value: 5.12 }}
                        description="Since last week"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
