import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IoMdTimer } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteNoteAPI, getAllNoteAPI } from "../services/allAPIs";
import { addNotesToStore } from "../redux/addNoteSlice";
import { AddNote } from "./AddNote";

const ITEM_HEIGHT = 48;
/* eslint-disable react/prop-types */
export const Note = ({ data }) => {
  const dispatch = useDispatch();
  // MUI thingssss
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNoteAPI(noteId);
    } catch (error) {
      console.log("Deletion API error: ", error);
    }
    const { data } = await getAllNoteAPI();
    dispatch(addNotesToStore([...data].reverse()));
    handleClose();
  };

  const handleEditNote = () => {};

  return (
    <div
      style={{
        backgroundColor: data.color,
      }}
      className="hover:shadow-2xl transition duration-250 ease-out break-inside-avoid rounded-[20px] p-5 flex flex-col gap-5 mb-5 max-w-sm mx-auto"
    >
      <div className="flex justify-between items-center">
        <div
          style={{ fontSize: "1.2rem" }}
          className="flex gap-2 items-center opacity-50"
        >
          <BsCalendar2DateFill />
          <p className="font-normal text-sm ">{data?.date}</p>
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
            <MenuItem onClick={() => handleEditNote(data)}>
              <AddNote
                handlCloseEditMenu={handleClose}
                currentNote={data}
                entry={"edit"}
              />
            </MenuItem>
            <MenuItem onClick={() => handleDeleteNote(data?.id)}>
              delete
            </MenuItem>
          </Menu>
        </div>
      </div>
      <h3 className="text-xl py-2 font-normal tracking-wider border-b border-slate-400 border-bottom">
        {data?.title}
      </h3>
      <p
        className="text-base leading-7 tracking-wider text-justify font-normal opacity-70"
        style={{ wordWrap: "break-word" }}
      >
        {data?.body}
      </p>
      <div
        style={{ fontSize: "1.5rem" }}
        className="flex gap-2 items-center opacity-50"
      >
        <IoMdTimer />
        <p className="font-bold text-xs ">
          {data?.time} {data?.day}
        </p>
      </div>
    </div>
  );
};
