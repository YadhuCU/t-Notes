import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IoMdAddCircle } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { FaFile } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

export const AddNote = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openColor = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseColor = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" break-inside-avoid flex justify-center items-center border-dashed border-2 border-slate-400 rounded-lg  p-5  flex-col gap-5 mb-5 max-w-md h-40 ">
      <IoMdAddCircle
        onClick={handleOpen}
        style={{ fontSize: "2rem" }}
        className="text-slate-400"
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="add-note flex flex-col gap-5 mb-5 max-w-md ">
              <label className="flex items-center gap-2 opacity-50">
                {" "}
                {<FaFile />}Create New Note
              </label>
              <input
                id="note-title"
                type="text"
                placeholder="Title"
                autoFocus
              />
              <textarea
                id="note-body"
                rows={10}
                spellCheck={false}
                placeholder="Content"
              ></textarea>
              <div className="flex justify-between">
                <button
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg bg-red-100"
                >
                  cancel
                </button>
                <div>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <div className="p-3 border-black border-2 rounded-full"></div>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openColor}
                    onClose={handleCloseColor}
                    onClick={handleCloseColor}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>
                      <div className="p-3 bg-blue-900 rounded-full"></div>
                    </MenuItem>
                    <MenuItem>
                      <div className="p-3 bg-purple-900 rounded-full"></div>
                    </MenuItem>
                  </Menu>
                </div>
                <button
                  onClick={handleClose}
                  className="px-3 py-2 rounded-lg bg-green-100"
                >
                  Add
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
