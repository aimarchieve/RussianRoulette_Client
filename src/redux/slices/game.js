// import { getGridSingleSelectQuickFilterFn } from '@mui/x-data-grid';
import { createSlice } from '@reduxjs/toolkit';
// utils
import api from '../../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  randomNumbers: [],
  result: null,
  balance: 0,
  gameInfo: [],
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
      state.balance = action.payload;
    },

    getGameInfomation(state, action) {
      state.isLoading = false;
      state.gameInfo = action.payload;
    },
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

export function getGameInfo() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try{
      const response = await api.get('/gameInfo/getAllGameInfo');
      dispatch(slice.actions.getGameInfomation(response.data));
    } catch(error) {
      console.log("get All Game Info Error => " ,error);
      dispatch(slice.actions.hasError(error));
    }
  }
}
