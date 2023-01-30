import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./styles.css";
import SearchBar from "../searchBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style} className="modal">
          <div className="title">
            <div className="head">Change ad images</div>
            <div className="sub">
              search and select image from zocket library or upload from your
              device{" "}
            </div>
          </div>
          <SearchBar placeholder="Search for the image" width={34} />

          <div className="or">
            <div className="cnt">OR</div>
          </div>

          <div className="upload">Upload from yor device</div>
        </div>
      </Modal>
    </div>
  );
}
