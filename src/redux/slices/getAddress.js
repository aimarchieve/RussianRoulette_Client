import { getGridSingleSelectQuickFilterFn } from '@mui/x-data-grid';
import { createSlice } from '@reduxjs/toolkit';
// utils
import api from '../../utils/api';
// ----------------------------------------------------------------------

const initialState = {
    isLoading: false,
    error: false,
};

const slice = createSlice({
    name: 'getAddress',
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
    }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

export function getAddress(walletId, blockchain, network) {
    return async (dispatch) => {
        dispatch(slice.actions.startLoading());
        try {
            const context = {
                "context": "yourExampleString",
                "data": {
                    "item": {
                        "label": "yourLabelStringHere"
                    }
                }
            };
            const response = await api.post(
                `https://rest.cryptoapis.io/v2/wallet-as-a-service/wallets/${walletId}/${blockchain}/${network}/addresses?context=yourExampleString`,
                context);
            console.log("getAddress Result: ", response.data);
        } catch (error) {
            console.log('# get Address Error => ', error);
            dispatch(slice.actions.hasError(error));
        }
    };
}

// ----------------------------------------------------------------------

