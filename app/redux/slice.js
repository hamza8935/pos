import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    onToggleHeaderSidebarClose: true,
    mobileSidebar: true,
}


export const counterSlice = createSlice({

    name: 'productsStore',
    initialState,
    reducers: {

        navbarToggleBtn: (state, action) => {

            state.onToggleHeaderSidebarClose = !state.onToggleHeaderSidebarClose;
        },
        toggleMobileScreenSidebar: (state, action) => {
            
            state.mobileSidebar = !state.mobileSidebar
            console.log(state.mobileSidebar);
        },
        closeMobileScreenSidebar: (state, action) => {
            state.mobileSidebar = !state.mobileSidebar;
        }



    },
})


export const { navbarToggleBtn, toggleMobileScreenSidebar, closeMobileScreenSidebar } = counterSlice.actions

export default counterSlice.reducer