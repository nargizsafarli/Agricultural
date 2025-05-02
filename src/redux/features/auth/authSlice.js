import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../client";

// !Register thunk
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

//! Login thunk
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

//! Logout 
export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    await supabase.auth.signOut();
  }
);

// // Check session thunk
// export const checkSession = createAsyncThunk(
//   "auth/checkSession",
//   async () => {
//     const {
//       data: { session },
//     } = await supabase.auth.getSession();

//     return session?.user || null;
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    loginError: null,
    registerError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
     // Register
.addCase(register.pending, (state) => {
  state.loading = true;
  state.registerError = null;
})
.addCase(register.fulfilled, (state) => {
  state.loading = false;
  state.registerError = null;
})
.addCase(register.rejected, (state, action) => {
  state.loading = false;
  state.registerError = action.error.message;
})

// Login
.addCase(login.pending, (state) => {
  state.loading = true;
  state.loginError = null;
})
.addCase(login.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload;
  state.loginError = null;
})
.addCase(login.rejected, (state, action) => {
  state.loading = false;
  state.loginError = action.error.message;
})


      // Check session
    //   .addCase(checkSession.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //   });
  },
});

export default authSlice.reducer;
