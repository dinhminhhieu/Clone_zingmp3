import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Public, Login } from "./containers/public";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/*" element={<Public />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
