import { IoMdAddCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFolder } from "react-icons/fa";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "swiper/css";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import { Folder } from "./Folder";
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

export const Folders = () => {
  return (
    <div className="container  flex flex-col w-full items-center lg:items-start shadow-2xl rounded-[20px] sticky top-[-130px] z-10 bg-white px-4 py-4 mt-5">
      <h1 className="text-5xl">Recent Folders</h1>
      <ul className="my-4 flex gap-8 md:gap-14 border-b py-2">
        <li className="cursor-pointer text-sm md:text-md relative active">
          All
        </li>
        <li className="cursor-pointer text-sm md:text-md relative active">
          Todays
        </li>
        <li className="cursor-pointer text-sm md:text-md relative">
          This Week
        </li>
        <li className="cursor-pointer text-sm md:text-md relative">
          This Month
        </li>
      </ul>
      <div
        className="mt-10 max-w-full "
        style={{ width: "calc(100vw - 70px)" }}
      >
        <Swiper
          slidesPerView={2.3}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1704: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 5, 7, 9, 9].map((_, index) => (
            <SwiperSlide key={index}>
              <Folder home={true} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="rounded-[20px] border-dashed border-2 border-slate-400 w-40 h-24 md:w-60 md:h-40 flex justify-center items-center text-3xl">
              <AddFolder />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

{
  /* Modal */
}

export const AddFolder = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openColor = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseColor = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-100">
      <IoMdAddCircle
        style={{ fontSize: "2rem" }}
        className="text-slate-400"
        onClick={handleOpen}
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
                {<FaFolder />}Create New Folder
              </label>
              <input
                id="note-title"
                type="text"
                placeholder="Folder Name"
                autoFocus
              />
              <div className="flex justify-between">
                <button className="px-3 py-2 rounded-lg bg-red-100">
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
                    <MenuItem onClick={handleClose}>
                      <div className="p-3 bg-blue-900 rounded-full"></div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div className="p-3 bg-purple-900 rounded-full"></div>
                    </MenuItem>
                  </Menu>
                </div>
                <button className="px-3 py-2 rounded-lg bg-green-100">
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
