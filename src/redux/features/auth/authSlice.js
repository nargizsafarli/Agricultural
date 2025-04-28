import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../client";

// Register thunk
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, surname, phone, email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, surname, phone },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
);

// Login thunk
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  }
);

// Logout thunk
export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    await supabase.auth.signOut();
  }
);

// Check session thunk
export const checkSession = createAsyncThunk(
  "auth/checkSession",
  async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session?.user || null;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })

      // Check session
      .addCase(checkSession.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
