/* eslint-disable react/prop-types */
import { FaFolder } from "react-icons/fa";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ITEM_HEIGHT = 48;

export const Folder = ({ home }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={`rounded-[20px] hover:shadow-inner relative bg-green-100 ${
        home ? " w-40 h-24 md:w-60 md:h-40" : " w-60 h-40 "
      }  p-5 flex flex-col justify-between`}
    >
      <div
        className={`absolute ${
          home ? "top-[4px] right-[4px]" : ""
        } top-[10px] right-[10px]`}
      >
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
      <FaFolder style={{ fontSize: "3rem" }} className="text-green-600" />
      <div>
        <p className="text-2xl font-bold">Folder</p>
        <p className="font-light">9/0/2024</p>
      </div>
    </div>
  );
};
