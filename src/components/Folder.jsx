/* eslint-disable react/prop-types */
import { FaFolder } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";
import { deleteFolderAPI, getAllFoldersAPI } from "../services/allAPIs";
import { useDispatch } from "react-redux";
import { addFoldersToStore } from "../redux/addFolderSlice";
import { AddFolder } from "./AddFolder";

const ITEM_HEIGHT = 48;

export const Folder = ({ home, folder }) => {
  const dispatch = useDispatch();
  // MUI Thingss..
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDeleteFolder = async (id) => {
    let response;
    try {
      response = await deleteFolderAPI(id);
    } catch (error) {
      console.log(error);
    }
    if (response.status >= 200 && response.status < 300) {
      // deletion success
      const { data } = await getAllFoldersAPI();
      dispatch(addFoldersToStore([...data].reverse()));
    } else {
      // deletion failed
      console.log("Delete Folder Failed: ", response.status);
    }
    handleClose();
  };

  return (
    <div
      style={{
        backgroundColor: folder?.color,
      }}
      className={`rounded-[20px] hover:shadow-inner relative  ${
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
          <MenuItem>
            <AddFolder
              handleCloseEditMenu={handleClose}
              entry={"edit"}
              editFolder={folder}
            />
          </MenuItem>
          <MenuItem onClick={() => handleDeleteFolder(folder?.id)}>
            delete
          </MenuItem>
        </Menu>
      </div>
      <FaFolder style={{ fontSize: "3rem" }} className="text-slate-600" />
      <div>
        <p className="text-2xl font-bold">
          {folder?.title.length > 15
            ? folder?.title.slice(0, 15) + "..."
            : folder?.title}
        </p>
        <p className="font-light">{folder?.date}</p>
      </div>
    </div>
  );
};
