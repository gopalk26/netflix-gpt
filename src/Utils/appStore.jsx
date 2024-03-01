import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice';
import movieReducer from './movieSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';

const appStore = configureStore({

    reducer:{
              user :UserReducer ,
              movies:movieReducer,
              gpt:gptReducer,
              config: configReducer,

    },

});

export default appStore;