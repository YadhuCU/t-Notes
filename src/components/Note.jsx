import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IoMdTimer } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";

const ITEM_HEIGHT = 48;
/* eslint-disable react/prop-types */
export const Note = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    console.log(option, "-option");
    setAnchorEl(null);
  };
  console.log(anchorEl, "--anchor el");
  console.log(open, "--open");
  return (
    <div className="hover:shadow-2xl transition duration-250 ease-out break-inside-avoid rounded-[20px] bg-blue-100 p-5 flex flex-col gap-5 mb-5 max-w-md ">
      <div className="flex justify-between items-center">
        <div
          style={{ fontSize: "1.2rem" }}
          className="flex gap-2 items-center opacity-50"
        >
          <BsCalendar2DateFill />
          <p className="font-normal text-sm ">2/2/2024</p>
        </div>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={() => handleClose("edite")}>edit</MenuItem>
            <MenuItem onClick={() => handleClose("delete")}>delete</MenuItem>
          </Menu>
        </div>
      </div>
      <h3 className="text-xl py-2 font-normal tracking-wider border-b border-slate-400 border-bottom">
        Title
      </h3>
      <p className="text-base leading-7 tracking-wider font-normal opacity-70">
        {data}
      </p>
      <div
        style={{ fontSize: "1.5rem" }}
        className="flex gap-2 items-center opacity-50"
      >
        <IoMdTimer />
        <p className="font-bold text-xs ">9.00AM Monday</p>
      </div>
    </div>
  );
};
