import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ToDoItem {
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
        addToDoItem(state, action) {
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchToDoAsync.fulfilled, (state, action) => {
            console.log("Data fetched successfully");
            console.log(action.payload);
            state.status = "idle";
            state.items = action.payload
            
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
            ,async () => 
{
     const response = await fetch("http://localhost:8080/todo");
     return await response.json();
});

export const { addToDoItem } = todoSlice.actions;
export default todoSlice.reducer;
