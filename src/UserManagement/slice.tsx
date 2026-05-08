import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: 'Lucky', age: 21, gender: 'Male'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default usersSlice.reducer;