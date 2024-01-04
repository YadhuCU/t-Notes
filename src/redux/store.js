import { configureStore } from "@reduxjs/toolkit";
import addNoteSlice from "./addNoteSlice";
import addFolderSlice from "./addFolderSlice";
import addArchiveSlice from "./addArchiveSlice";

const store = configureStore({
  reducer: {
    note: addNoteSlice,
    folder: addFolderSlice,
    archive: addArchiveSlice,
  },
});

export default store;
