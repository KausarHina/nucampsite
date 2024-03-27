import { createSlice } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/oldData/PROMOTIONS';

const initialState = {
    promotionsArray : PROMOTIONS
};

const promotionsSlice = createSlice({
    name : 'promotions',
    initialState
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return {
        featuredItem: state.promotions.promotionsArray.find(
            (promotion) => promotion.featured
        ),
        isLoading: state.promotions.isLoading,
        errMsg: state.promotions.errMsg
    };
};
