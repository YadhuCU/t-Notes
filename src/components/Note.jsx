import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IoMdTimer } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addToArchiveAPI,
  addToTrashAPI,
  deleteNoteAPI,
  getAllArchiveAPI,
  getAllNoteAPI,
  getSingleNoteAPI,
  removeFromArchiveAPI,
  updateNoteAPI,
} from "../services/allAPIs";
import { addNotesToStore } from "../redux/addNoteSlice";
import { AddNote } from "./AddNote";
import { addArchivesToStore } from "../redux/addArchiveSlice";

const ITEM_HEIGHT = 48;
/* eslint-disable react/prop-types */
export const Note = ({ data, trash, archive }) => {
  const dispatch = useDispatch();

  // MUI thingssss
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDeleteNote = async (noteId) => {
    try {
      const { data } = await getSingleNoteAPI(noteId);
      await addToTrashAPI(data);
      await deleteNoteAPI(noteId);
    } catch (error) {
      console.log("Deletion API error: ", error);
    }
    const { data } = await getAllNoteAPI();
    dispatch(addNotesToStore([...data].reverse()));
    handleClose();
  };

  const handleDragStart = (event, note) => {
    event.dataTransfer.setData("note", JSON.stringify(note));
  };

  const handleAddToArchive = async (note) => {
    // if the note in Archive page
    if (archive) {
      // remove from the archive and update the store
      // remove from archive db
      await removeFromArchiveAPI(note.id);
      // change the value 'archive' in note db
      const singleNote = await getSingleNoteAPI(note.id);

      const newSinlgeNote = {
        ...singleNote.data,
        archive: false,
      };
      await updateNoteAPI(note.id, newSinlgeNote);

      // updating the store of Archive
      const { data } = await getAllArchiveAPI();
      dispatch(addArchivesToStore([...data].reverse()));
    } else {
      // in other pages
      const { data } = await getAllArchiveAPI();
      const isArchived = data.find((item) => item.id == note.id);
      console.log("isArchived : ", isArchived);
      if (isArchived) {
        await removeFromArchiveAPI(note.id);
        // change the value 'archive' in note db
        const singleNote = await getSingleNoteAPI(note.id);

        const newSinlgeNote = {
          ...singleNote.data,
          archive: false,
        };
        console.log(newSinlgeNote);
        await updateNoteAPI(note.id, newSinlgeNote);
        // updating the store
        try {
          const { data } = await getAllNoteAPI();
          dispatch(addNotesToStore([...data].reverse()));
        } catch (error) {
          console.error("Error: ", error);
        }
        try {
          const { data } = await getAllArchiveAPI();
          dispatch(addArchivesToStore([...data].reverse()));
        } catch (error) {
          console.error("Error: ", error);
        }
      } else {
        // fetchinge singe note to update the 'archive' field
        const singleNote = await getSingleNoteAPI(note.id);
        console.log("singleNote", singleNote);
        const newSinlgeNote = {
          ...singleNote.data,
          archive: true,
        };
        console.log("newSingelNote", newSinlgeNote);
        await updateNoteAPI(note.id, newSinlgeNote);
        // adding note to archive db
        await addToArchiveAPI(newSinlgeNote);
        // updating the store
        try {
          const { data } = await getAllNoteAPI();
          dispatch(addNotesToStore([...data].reverse()));
        } catch (error) {
          console.error("Error: ", error);
        }
        try {
          const { data } = await getAllArchiveAPI();
          dispatch(addArchivesToStore([...data].reverse()));
        } catch (error) {
          console.error("Error: ", error);
        }
      }
    }
    handleClose();
  };

  return (
    <div
      draggable
      onDragStart={(event) => handleDragStart(event, data || {})}
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
            // PaperProps={{
            //   style: {
            //     maxHeight: ITEM_HEIGHT * 4.5,
            //     width: "20ch",
            //   },
            // }}
          >
            <MenuItem>
              <AddNote
                handlCloseEditMenu={handleClose}
                currentNote={data}
                entry={"edit"}
              />
            </MenuItem>
            {archive || (
              <MenuItem onClick={() => handleDeleteNote(data?.id)}>
                {trash ? "delete" : "move to trash"}
              </MenuItem>
            )}
            <MenuItem onClick={() => handleAddToArchive(data)}>
              {data?.archive ? "unarchive" : "archive"}
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
