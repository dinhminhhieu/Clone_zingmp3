/* - useSelector: truy cập trạng thái trong Redux từ các components React
   - useDispatch: sử dụng để gửi các action đến reducers để cập nhật trạng thái của ứng dụng*/
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { test } = useSelector((state) => state.app);
  console.log(test);
  return (
    <>
      <div>App</div>
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
