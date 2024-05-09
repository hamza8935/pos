'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
export default function Header({ openSidebar, closeSideBar, toggleClose, isOpen }) {
    const [closeProfile, setcloseProfile] = useState(false)
    // const [isOpen, setisOpen] = useState(true)
    // function toggleClose() {
    //     setisOpen(!isOpen)
    // }
    function showProfile() {
        setcloseProfile(!closeProfile)
    }
    return (
        //       <div className="header">

        //         <div className="header-left active">
        //           <Link href="/" className="logo logo-normal">
        //             <img src="/img/logo.png" alt="" />
        //           </Link>
        //           <Link href="/" className="logo-small">
        //             <img src="/img/logo-small.png" alt="" />
        //           </Link>
        //           <Linkid="toggle_btn" href="javascript:void(0);">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        //                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        //                  className="feather feather-chevrons-left feather-16">
        //               <polyline points="11 17 6 12 11 7"></polyline>
        //               <polyline points="18 17 13 12 18 7"></polyline>
        //             </svg>
        //           </a>
        //         </div>

        //         <Linkid="mobile_btn" className="mobile_btn" href="#sidebar">
        //             <span className="bar-icon">
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //             </span>
        //         </a>

        //         <ul className="nav user-menu">

        //           <li className="nav-item nav-searchinputs">
        //             <div className="top-nav-search">
        //             </div>
        //           </li>


        //           <li className="nav-item dropdown has-arrow main-drop select-store-dropdown">
        //           </li>


        //           <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
        //           </li>

        //           <li className="nav-item nav-item-box">
        //             <Linkhref="javascript:void(0);" id="btnFullscreen">
        //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        //                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        //                    className="feather feather-maximize">
        //                 <path
        //                     d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        //               </svg>
        //             </a>
        //           </li>

        //           <li className="nav-item dropdown has-arrow main-drop">
        //             <Link href="/" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
        // <span className="user-info">
        // <span className="user-letter">
        // <img src="assets/img/profiles/avator1.jpg" alt="" className="img-fluid" />
        // </span>
        // <span className="user-detail">
        // <span className="user-name">John Smilga</span>
        // <span className="user-role">Super Admin</span>
        // </span>
        // </span>
        //             </Link>
        //             <div className="dropdown-menu menu-drop-user">
        //               <div className="profilename">
        //                 <div className="profileset">
        // <span className="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
        // <span className="status online"></span></span>
        //                   <div className="profilesets">
        //                     <h6>John Smilga</h6>
        //                     <h5>Super Admin</h5>
        //                   </div>
        //                 </div>
        //                 <hr className="m-0" />
        //                 <LinkclassName="dropdown-item" href="profile.html">
        //                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        //                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        //                        className="feather feather-user me-2">
        //                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        //                     <circle cx="12" cy="7" r="4"></circle>
        //                   </svg>
        //                   My
        //                   Profile</a>
        //                 <LinkclassName="dropdown-item" href="general-settings.html">
        //                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        //                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        //                        className="feather feather-settings me-2">
        //                     <circle cx="12" cy="12" r="3"></circle>
        //                     <path
        //                         d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        //                   </svg>
        //                   Settings</a>
        //                 <hr className="m-0" />
        //                 <LinkclassName="dropdown-item logout pb-0" href="signin.html"><img
        //                     src="assets/img/icons/log-out.svg" className="me-2" alt="img" />Logout</a>
        //               </div>
        //             </div>
        //           </li>
        //         </ul>


        //         <div className="dropdown mobile-user-menu">
        //           <Linkhref="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
        //              aria-expanded="false"><i className="fLinkfa-ellipsis-v"></i></a>
        //           <div className="dropdown-menu dropdown-menu-right">
        //             <LinkclassName="dropdown-item" href="profile.html">My Profile</a>
        //             <LinkclassName="dropdown-item" href="general-settings.html">Settings</a>
        //             <LinkclassName="dropdown-item" href="signin.html">Logout</a>
        //           </div>
        //         </div>
        //     </div>



        <>

            <header className={`${styles.navContainer}`}>
               
                <div className={isOpen ? `${styles.logoContainer}` : `${styles.logoContainer1}`}>
                    {
                        isOpen ?
                            <Link href='/' className={`${styles.logo}`} >
                                <img src='/img/logo.png' />
                            </Link>
                            :
                            <Link href='/' className={`${styles.logo1}`} >
                                <img src='/img/favicon.png' className='img-fluid' />
                            </Link>

                    }
                    <div className={isOpen ? `${styles.togleBtn}` : `${styles.togleBtn1}`} onClick={toggleClose} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left feather-16"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                    </div>
                </div>
                <ul className={`${styles.nav} ${styles.userMenu}`}>
                    <li className={`${styles.searchInput}`}>
                        <div className={`${styles.topSearch}`}>
                            <form className={`${styles.dropdown}`}>
                                <div className={`${styles.searchinputs}`}>
                                    <input type='text' placeholder='Search' />
                                    <div className={`${styles.cancelIcon}`}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle feather-14"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li className={`${styles.store}`}>
                        <Link href='' className={` ${styles.selectStore}`}>
                            <span className={` ${styles.userInfo}`}>
                                <span className={`${styles.userPic}`}>
                                    <img className='img-fluid' src='/1.png' />
                                </span>
                                <span className={`${styles.userdetail}`}>
                                    <span className={`${styles.userName}`}>
                                        Select Store
                                    </span>
                                </span>

                            </span>
                        </Link>
                    </li>
                 



                    <li className={`${styles.flag}`}>
                        <Link href='#' >
                            <img src='/us.png' />
                        </Link>
                    </li>
                    <li className={`${styles.fullscreen}`}>
                        <Link href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                        </Link>
                    </li>
                    <li className={`${styles.message}`}>
                        <Link href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </Link>
                        <span className={`${styles.badge}`}>1</span>
                    </li>
                    <li className={`${styles.notification}`}>
                        <Link href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </Link>
                        <span className={`${styles.badge}`}>2</span>
                    </li>
                    <li className={`${styles.settings}`}>
                        <Link href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>                        </Link>
                    </li>
                    <li className={`${styles.userProfile}`}>
                        <Link href='#'>
                            <span className={`${styles.user}`} onClick={showProfile}>
                                <span className={`${styles.userProfi}`}>
                                    <img src="/img/a.jpg" alt="" class="img-fluid" />
                                </span>
                                <span className={!closeProfile ? `${styles.more}` : `${styles.more1}`}>
                                    <span>
                                        <span className={`${styles.adminName}`}>
                                            John Smilga
                                        </span>
                                        <span className={`${styles.userRole}`}>
                                            Super Admin
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </Link>
                        {
                            closeProfile &&

                            <div className={!closeProfile ? `${styles.openMenu}` : `${styles.openMenu1}`} style={{ position: 'absolute' }}>
                                <div className="profilename">
                                    <div className={`${styles.profileset}`}>
                                        <span className={`${styles.userImg}`}>
                                            <img src="/img/a.jpg" alt="" />
                                            <span className={`${styles.status}`}></span>
                                        </span>
                                        <div className={`${styles.profilesets}`}>
                                            <h6>John Smilga</h6>
                                            <h5>Super Admin</h5>
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                    <Link href="" className={`${styles.myProfile}`} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-user me-2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        My
                                        Profile</Link>
                                    <Link href='' className={`${styles.myProfile}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-settings me-2">
                                            <circle cx="12" cy="12" r="3"></circle>
                                            <path
                                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                        </svg>
                                        Settings</Link>
                                    <hr className="m-0" />
                                    <Link href='' className={`${styles.logOut}`} ><img
                                        src="/log-out.svg" className="me-2" alt="img" />Logout</Link>
                                </div>
                            </div>
                        }

                    </li>
                </ul>
            </header>
            <header className={`d-md-block d-lg-none d-md-flex ${styles.navContainer1}`}>
                <div className={`${styles.mobileIcon}`} onClick={openSidebar}>
                    {
                        !closeSideBar ?
                            <span className={`${styles.mobileIcon}`}>
                                <span className={`${styles.firstSpan}`}></span>
                                <span className={`${styles.secondSpan}`}></span>
                                <span className={`${styles.thirdSpan}`}></span>
                            </span>
                            :
                            <span className={`${styles.mobileIcon}`}>
                                <span className={`${styles.firstSpan1}`}></span>
                                <span className={`${styles.secondSpan2}`}></span>
                                <span className={`${styles.thirdSpan3}`}></span>
                            </span>
                    }

                </div>
                <div className={`${styles.mobileImageContainer}`}>
                    <img src='/img/logo.png' />
                </div>
                <div>
                    <BsThreeDotsVertical color='orange' size='1.7rem' />
                </div>
            </header>

        </>
    );
}
