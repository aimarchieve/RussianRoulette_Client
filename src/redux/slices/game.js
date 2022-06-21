// import { getGridSingleSelectQuickFilterFn } from '@mui/x-data-grid';
import { createSlice } from '@reduxjs/toolkit';
// utils
import api from '../../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  posts: [],
  randomNumbers: [],
  result: null,
  balance: 0,
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    getRandomNumber(state, action) {
      state.isLoading = false;
      state.randomNumbers = action.payload;
    },

    getResult(state, action) {
      state.isLoading = false;
      state.result = action.payload;
    },

    getBalance(state, action) {
      state.isLoading = false;
      console.log('# state.balance => ', action.payload);``
      state.balance = action.payload;
    }


  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

export function addNewGame(wagered, payout, username, game, type, _id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await api.post('/gameInfo/insertGameInfo', { wagered, payout, username, game, type });
      dispatch(slice.actions.getRandomNumber(response.data.randomNumber));
      dispatch(slice.actions.getResult(response.data.result));
      const res = await api.get(`/userInfo/getUserInfoById/${_id}`);
      let balance = res.data.balance;
      if (response.data.result < Number(payout)) {
        balance = balance - Number(wagered);
      } else {
        balance = balance + (Number(wagered) * Number(payout));
      }
      await api.put(`/userInfo/updateUserInfoById/${_id}`, { balance });
      setTimeout(() => {
        dispatch(slice.actions.getBalance(balance));
        const oldUserInfo = JSON.parse(localStorage.getItem('userinfo'));
        const newUserInfo = { ...oldUserInfo, balance };
        localStorage.setItem('userinfo', JSON.stringify(newUserInfo));
      }, 5500)
    } catch (error) {
      console.log('# error => ', error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPostsInitial(index, step) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts', {
        params: { index, step }
      });
      const results = response.data.results.length;
      const { maxLength } = response.data;

      dispatch(slice.actions.getPostsInitial(response.data.results));

      if (results >= maxLength) {
        dispatch(slice.actions.noHasMore());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPost(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title }
      });
      dispatch(slice.actions.getPostSuccess(response.data.post));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getRecentPosts(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title }
      });

      dispatch(slice.actions.getRecentPostsSuccess(response.data.recentPosts));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
