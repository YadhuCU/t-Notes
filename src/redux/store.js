import { configureStore } from "@reduxjs/toolkit";
import addNoteSlice from "./addNoteSlice";
import addFolderSlice from "./addFolderSlice";

const store = configureStore({
  reducer: {
    note: addNoteSlice,
    folder: addFolderSlice,
  },
});

export default store;
