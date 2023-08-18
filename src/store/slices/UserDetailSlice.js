import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const success = () =>
    toast.success("Successfully Added", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
const deletesuccess = () => {
    toast.success("Deleted Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};
const updatesuccess = () => {
    toast.success("Data Updated Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};

const URL = "https://64df30b271c3335b258238cd.mockapi.io/crud";

// Create Action

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const result = await response.json();
        success();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

// Read Action

export const showUser = createAsyncThunk("showUser", async (data, { rejectWithValue }) => {
    const response = await fetch(URL);

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});
// Delete Action

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`${URL}/${id}`, { method: "DELETE" });

    try {
        const result = await response.json();
        deletesuccess();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

// Update Action

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(`${URL}/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const result = await response.json();
        updatesuccess();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

export const UserDetailSlice = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },

    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload;
        },
    },

    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        // show users
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // Delete User
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.users = state.users.filter((element) => element.id !== id);
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // Update user
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((element) => (element.id === action.payload.id ? action.payload : element));
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default UserDetailSlice.reducer;

export const { searchUser } = UserDetailSlice.actions;
