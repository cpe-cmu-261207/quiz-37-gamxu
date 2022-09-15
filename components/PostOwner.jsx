import React from "react";

export default function PostOwner(props) {
  return(
  <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img
        src="/profileImages/mypic.png"
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5">Wuttipat Sanchai 640610668</span>
    </div>
    <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}/>
      <span className="text-muted">10K คน</span>
    </div>
    <hr className="m-0" />
  </div>
  );
}
