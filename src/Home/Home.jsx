import React from "react";
import "./CSS/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="box ">
      <div className="row">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">TOLL PLAZA</h5>
              <Link to="/tollplaza" className="btn btn-danger">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">USER</h5>
              {/* <a href="/getdb" className="btn btn-danger"> */}
              <Link to="/Udata" className="btn btn-danger">

                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">DEALER</h5>
              <Link to="/getdb" className="btn btn-danger">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
