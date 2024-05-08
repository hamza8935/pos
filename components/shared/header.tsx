import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
      <div className="header">

        <div className="header-left active">
          <Link href="/" className="logo logo-normal">
            <img src="/img/logo.png" alt="" />
          </Link>
          <Link href="/" className="logo-small">
            <img src="/img/logo-small.png" alt="" />
          </Link>
          <a id="toggle_btn" href="javascript:void(0);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-chevrons-left feather-16">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </a>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
            </span>
        </a>

        <ul className="nav user-menu">

          <li className="nav-item nav-searchinputs">
            <div className="top-nav-search">
            </div>
          </li>


          <li className="nav-item dropdown has-arrow main-drop select-store-dropdown">
          </li>


          <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
          </li>

          <li className="nav-item nav-item-box">
            <a href="javascript:void(0);" id="btnFullscreen">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="feather feather-maximize">
                <path
                    d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
            </a>
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <Link href="/" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
<span className="user-info">
<span className="user-letter">
<img src="assets/img/profiles/avator1.jpg" alt="" className="img-fluid" />
</span>
<span className="user-detail">
<span className="user-name">John Smilga</span>
<span className="user-role">Super Admin</span>
</span>
</span>
            </Link>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilename">
                <div className="profileset">
<span className="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
<span className="status online"></span></span>
                  <div className="profilesets">
                    <h6>John Smilga</h6>
                    <h5>Super Admin</h5>
                  </div>
                </div>
                <hr className="m-0" />
                <a className="dropdown-item" href="profile.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="feather feather-user me-2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  My
                  Profile</a>
                <a className="dropdown-item" href="general-settings.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="feather feather-settings me-2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Settings</a>
                <hr className="m-0" />
                <a className="dropdown-item logout pb-0" href="signin.html"><img
                    src="assets/img/icons/log-out.svg" className="me-2" alt="img" />Logout</a>
              </div>
            </div>
          </li>
        </ul>


        <div className="dropdown mobile-user-menu">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
             aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">My Profile</a>
            <a className="dropdown-item" href="general-settings.html">Settings</a>
            <a className="dropdown-item" href="signin.html">Logout</a>
          </div>
        </div>
    </div>
  );
}
