import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ToDoItem {
    id: number;
    name: string;
    done: boolean;
}

interface ToDoState {
    items: ToDoItem[];
    status: "idle" | "loading" | "failed";
}

const initialState: ToDoState = {
    items: [],
    status: "idle"
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchToDoAsync.fulfilled, (state, action) => {
            console.log("Data fetched successfully");
            state.items = [...state.items]
            
        }).addCase(fetchToDoAsync.pending, (state, action) => {
            state.status = "loading";
            console.log("Fetching data...");
        }).addCase(fetchToDoAsync.rejected, (state, action) => {
            state.status = "failed";
            console.log("Error fetching data");
        });
    }
});

export const fetchToDoAsync = createAsyncThunk("todo/fetchToDoAsync"
            ,() =>  async () => 
{
     let response = await fetch("http://localhost:8080/todos");
     let jsonData = await response.json();
     return jsonData;
});

export default todoSlice.reducer;
