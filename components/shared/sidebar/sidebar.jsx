'use client'
import React from 'react'
import styles from './sidebar.module.css'
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { closeMobileScreenSidebar } from "@/app/redux/slice";

export default function Sidebar() {

    const dispatch = useDispatch();

    const toggleHeaderSidebar = useSelector((state) => state.counterReducer.onToggleHeaderSidebarClose)
    const mobileSidebar = useSelector((state) => state.counterReducer.mobileSidebar)

    function handleOnSidebarClick() {
        dispatch(closeMobileScreenSidebar())
    }

    return (
        <>
            <div className={!mobileSidebar && `${styles.mobileSidebarBackground1}`} onClick={handleOnSidebarClick}></div>


            <div className={mobileSidebar && `${styles.mobileSidebarBackground}`} >
                <div className={toggleHeaderSidebar ? `${styles.sidebar}` : `${styles.sidebar1}`}>

                    <div className={toggleHeaderSidebar ? `${styles.innerSidebar}` : `${styles.innerSidebar1}`}>

                        {toggleHeaderSidebar && <h6 className={`${styles.categoryHeading}`}>  Inventory </h6>}

                        <ul className={`${styles.subItems}`}>
                            <li>
                                <Link href='/admin/products' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/products/addProducts' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Create Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/addCategory' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                                    <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Category</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/subCategory' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-speaker"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line></svg>
                                    <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Sub Category</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/subCategory' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-speaker"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line></svg>                                            <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Units</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/subCategory' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>                                            <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Brands</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/subCategory' className={toggleHeaderSidebar ? `${styles.iconStyling}` : `${styles.iconStyling1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>                                            <span className={toggleHeaderSidebar ? `${styles.productsSpan}` : `${styles.productsSpan1}`}>Stores</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>



        </>
    );
}
