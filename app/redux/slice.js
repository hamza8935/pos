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
            // alert('hello')
            // if (state.onToggleHeaderSidebarClose = true) {
            //     state.onToggleHeaderSidebarClose = false
            // }else if (state.onToggleHeaderSidebarClose = false) {
            //     state.onToggleHeaderSidebarClose = true
            // }

            state.onToggleHeaderSidebarClose = !state.onToggleHeaderSidebarClose;
        },
        toggleMobileScreenSidebar: (state, action) => {
            // alert('yes')
            state.mobileSidebar = !state.mobileSidebar
            console.log(state.mobileSidebar);
        },
        closeMobileScreenSidebar: (state, action) => {
            state.mobileSidebar = !state.mobileSidebar;
        }



    },
})

// Action creators are generated for each case reducer function
export const { navbarToggleBtn, toggleMobileScreenSidebar, closeMobileScreenSidebar } = counterSlice.actions

export default counterSlice.reducer