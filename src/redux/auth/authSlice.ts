import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from '../../utils/type.utils';

// simulate API call for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { userName: string; password: string }, thunkAPI) => {
    // simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // simulate successful login response with access and refresh tokens
    return {
      accessToken: 'mockAccessToken',
      refreshToken: 'mockRefreshToken',
    };
  },
);

// simulate API call for refreshing tokens
export const refreshTokens = createAsyncThunk(
  'auth/refreshTokens',
  async (refreshToken: string, thunkAPI) => {
    // simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // simulate successful token refresh response with new access and refresh tokens
    return {
      accessToken: 'newMockAccessToken',
      refreshToken: 'newMockRefreshToken',
    };
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(refreshTokens.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(refreshTokens.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshTokens.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.error.message || null;
      state.accessToken = null;
      state.refreshToken = null;
    });
  },
});

export default authSlice.reducer;
