import Image from "next/image";
import Link from "next/link";
import Header from "./header";

export default function Sidebar() {
  return (
      <div className="sidebar" id="sidebar">
          <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '100%', height: '317px'}}>
              <div className="sidebar-inner slimscroll" style={{overflow: 'hidden', width: '100%', height: '317px'}}>
                  <div id="sidebar-menu" className="sidebar-menu">
                      <ul>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Main</h6>
                              <ul>
                                  <li className="submenu">
                                      <a href="javascript:void(0);" className="subdrop">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-grid">
                                              <rect x="3" y="3" width="7" height="7"></rect>
                                              <rect x="14" y="3" width="7" height="7"></rect>
                                              <rect x="14" y="14" width="7" height="7"></rect>
                                              <rect x="3" y="14" width="7" height="7"></rect>
                                          </svg>
                                          <span>Dashboard</span><span className="menu-arrow"></span></a>
                                      <ul style={{display: 'block'}}>
                                          <li><a href="index.html">Admin Dashboard</a></li>
                                          <li><a href="sales-dashboard.html">Sales Dashboard</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-smartphone">
                                              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                              <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                          </svg>
                                          <span>Application</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="chat.html">Chat</a></li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Call<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="video-call.html">Video Call</a></li>
                                                  <li><a href="audio-call.html">Audio Call</a></li>
                                                  <li><a href="call-history.html">Call History</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="calendar.html">Calendar</a></li>
                                          <li><a href="email.html">Email</a></li>
                                          <li><a href="todo.html">To Do</a></li>
                                          <li><a href="notes.html">Notes</a></li>
                                          <li><a href="file-manager.html">File Manager</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Inventory</h6>
                              <ul>
                                  <li><a href="product-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-box">
                                          <path
                                              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                      </svg>
                                      <span>Products</span></a></li>
                                  <li><a href="add-product.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-plus-square">
                                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                          <line x1="12" y1="8" x2="12" y2="16"></line>
                                          <line x1="8" y1="12" x2="16" y2="12"></line>
                                      </svg>
                                      <span>Create Product</span></a></li>
                                  <li><a href="expired-products.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-codesandbox">
                                          <path
                                              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                                          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                                          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                      </svg>
                                      <span>Expired Products</span></a></li>
                                  <li><a href="low-stocks.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-trending-down">
                                          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                          <polyline points="17 18 23 18 23 12"></polyline>
                                      </svg>
                                      <span>Low Stocks</span></a></li>
                                  <li><a href="category-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-codepen">
                                          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                          <line x1="12" y1="22" x2="12" y2="15.5"></line>
                                          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                          <line x1="12" y1="2" x2="12" y2="8.5"></line>
                                      </svg>
                                      <span>Category</span></a></li>
                                  <li><a href="sub-categories.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-speaker">
                                          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                                          <circle cx="12" cy="14" r="4"></circle>
                                          <line x1="12" y1="6" x2="12.01" y2="6"></line>
                                      </svg>
                                      <span>Sub Category</span></a></li>
                                  <li><a href="brand-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-tag">
                                          <path
                                              d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                          <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                      </svg>
                                      <span>Brands</span></a></li>
                                  <li><a href="units.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-speaker">
                                          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                                          <circle cx="12" cy="14" r="4"></circle>
                                          <line x1="12" y1="6" x2="12.01" y2="6"></line>
                                      </svg>
                                      <span>Units</span></a></li>
                                  <li><a href="varriant-attributes.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-layers">
                                          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                          <polyline points="2 17 12 22 22 17"></polyline>
                                          <polyline points="2 12 12 17 22 12"></polyline>
                                      </svg>
                                      <span>Variant Attributes</span></a></li>
                                  <li><a href="warranty.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-bookmark">
                                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                      <span>Warranties</span></a></li>
                                  <li><a href="barcode.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-align-justify">
                                          <line x1="21" y1="10" x2="3" y2="10"></line>
                                          <line x1="21" y1="6" x2="3" y2="6"></line>
                                          <line x1="21" y1="14" x2="3" y2="14"></line>
                                          <line x1="21" y1="18" x2="3" y2="18"></line>
                                      </svg>
                                      <span>Print Barcode</span></a></li>
                                  <li><a href="qrcode.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-maximize">
                                          <path
                                              d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                                      </svg>
                                      <span>Print QR Code</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Stock</h6>
                              <ul>
                                  <li><a href="manage-stocks.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-package">
                                          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                                          <path
                                              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                      </svg>
                                      <span>Manage Stock</span></a></li>
                                  <li><a href="stock-adjustment.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-clipboard">
                                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                      </svg>
                                      <span>Stock Adjustment</span></a></li>
                                  <li><a href="stock-transfer.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-truck">
                                          <rect x="1" y="3" width="15" height="13"></rect>
                                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                          <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                          <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                      </svg>
                                      <span>Stock Transfer</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Sales</h6>
                              <ul>
                                  <li><a href="sales-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-shopping-cart">
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle cx="20" cy="21" r="1"></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                      </svg>
                                      <span>Sales</span></a></li>
                                  <li><a href="invoice-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-file-text">
                                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                          <polyline points="14 2 14 8 20 8"></polyline>
                                          <line x1="16" y1="13" x2="8" y2="13"></line>
                                          <line x1="16" y1="17" x2="8" y2="17"></line>
                                          <polyline points="10 9 9 9 8 9"></polyline>
                                      </svg>
                                      <span>Invoices</span></a></li>
                                  <li><a href="sales-returns.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-copy">
                                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                      </svg>
                                      <span>Sales Return</span></a></li>
                                  <li><a href="quotation-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-save">
                                          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                          <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                          <polyline points="7 3 7 8 15 8"></polyline>
                                      </svg>
                                      <span>Quotation</span></a></li>
                                  <li><a href="pos.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-hard-drive">
                                          <line x1="22" y1="12" x2="2" y2="12"></line>
                                          <path
                                              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                          <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                          <line x1="10" y1="16" x2="10.01" y2="16"></line>
                                      </svg>
                                      <span>POS</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Promo</h6>
                              <ul>
                                  <li><a href="coupons.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-shopping-cart">
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle cx="20" cy="21" r="1"></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                      </svg>
                                      <span>Coupons</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Purchases</h6>
                              <ul>
                                  <li><a href="purchase-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-shopping-bag">
                                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                          <line x1="3" y1="6" x2="21" y2="6"></line>
                                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                                      </svg>
                                      <span>Purchases</span></a></li>
                                  <li><a href="purchase-order-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-file-minus">
                                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                          <polyline points="14 2 14 8 20 8"></polyline>
                                          <line x1="9" y1="15" x2="15" y2="15"></line>
                                      </svg>
                                      <span>Purchase Order</span></a></li>
                                  <li><a href="purchase-returns.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-refresh-cw">
                                          <polyline points="23 4 23 10 17 10"></polyline>
                                          <polyline points="1 20 1 14 7 14"></polyline>
                                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                      </svg>
                                      <span>Purchase Return</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Finance &amp; Accounts</h6>
                              <ul>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-file-text">
                                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                              <polyline points="14 2 14 8 20 8"></polyline>
                                              <line x1="16" y1="13" x2="8" y2="13"></line>
                                              <line x1="16" y1="17" x2="8" y2="17"></line>
                                              <polyline points="10 9 9 9 8 9"></polyline>
                                          </svg>
                                          <span>Expenses</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="expense-list.html">Expenses</a></li>
                                          <li><a href="expense-category.html">Expense Category</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Peoples</h6>
                              <ul>
                                  <li><a href="customers.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-user">
                                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="12" cy="7" r="4"></circle>
                                      </svg>
                                      <span>Customers</span></a></li>
                                  <li><a href="suppliers.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-users">
                                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="9" cy="7" r="4"></circle>
                                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                      </svg>
                                      <span>Suppliers</span></a></li>
                                  <li className="active"><a href="store-list.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-home">
                                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                      </svg>
                                      <span>Stores</span></a></li>
                                  <li><a href="warehouse.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-archive">
                                          <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                          <rect x="1" y="3" width="22" height="5"></rect>
                                          <line x1="10" y1="12" x2="14" y2="12"></line>
                                      </svg>
                                      <span>Warehouses</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">HRM</h6>
                              <ul>
                                  <li><a href="employees-grid.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-user">
                                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="12" cy="7" r="4"></circle>
                                      </svg>
                                      <span>Employees</span></a></li>
                                  <li><a href="department-grid.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-users">
                                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="9" cy="7" r="4"></circle>
                                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                      </svg>
                                      <span>Departments</span></a></li>
                                  <li><a href="designation.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-git-merge">
                                          <circle cx="18" cy="18" r="3"></circle>
                                          <circle cx="6" cy="6" r="3"></circle>
                                          <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                      </svg>
                                      <span>Designation</span></a></li>
                                  <li><a href="shift.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-shuffle">
                                          <polyline points="16 3 21 3 21 8"></polyline>
                                          <line x1="4" y1="20" x2="21" y2="3"></line>
                                          <polyline points="21 16 21 21 16 21"></polyline>
                                          <line x1="15" y1="15" x2="21" y2="21"></line>
                                          <line x1="4" y1="4" x2="9" y2="9"></line>
                                      </svg>
                                      <span>Shifts</span></a></li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-book-open">
                                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                          </svg>
                                          <span>Attendence</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="attendance-employee.html">Employee</a></li>
                                          <li><a href="attendance-admin.html">Admin</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-calendar">
                                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                              <line x1="16" y1="2" x2="16" y2="6"></line>
                                              <line x1="8" y1="2" x2="8" y2="6"></line>
                                              <line x1="3" y1="10" x2="21" y2="10"></line>
                                          </svg>
                                          <span>Leaves</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="leaves-admin.html">Admin Leaves</a></li>
                                          <li><a href="leaves-employee.html">Employee Leaves</a></li>
                                          <li><a href="leave-types.html">Leave Types</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="holidays.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-credit-card">
                                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                          <line x1="1" y1="10" x2="23" y2="10"></line>
                                      </svg>
                                      <span>Holidays</span></a></li>
                                  <li className="submenu">
                                      <a href="payroll-list.html">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-dollar-sign">
                                              <line x1="12" y1="1" x2="12" y2="23"></line>
                                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                          </svg>
                                          <span>Payroll</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="payroll-list.html">Employee Salary</a></li>
                                          <li><a href="payslip.html">Payslip</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Reports</h6>
                              <ul>
                                  <li><a href="sales-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-bar-chart-2">
                                          <line x1="18" y1="20" x2="18" y2="10"></line>
                                          <line x1="12" y1="20" x2="12" y2="4"></line>
                                          <line x1="6" y1="20" x2="6" y2="14"></line>
                                      </svg>
                                      <span>Sales Report</span></a></li>
                                  <li><a href="purchase-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-pie-chart">
                                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                      </svg>
                                      <span>Purchase report</span></a></li>
                                  <li><a href="inventory-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-inbox">
                                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                          <path
                                              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                      </svg>
                                      <span>Inventory Report</span></a></li>
                                  <li><a href="invoice-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-file">
                                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                          <polyline points="13 2 13 9 20 9"></polyline>
                                      </svg>
                                      <span>Invoice Report</span></a></li>
                                  <li><a href="supplier-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-user-check">
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="8.5" cy="7" r="4"></circle>
                                          <polyline points="17 11 19 13 23 9"></polyline>
                                      </svg>
                                      <span>Supplier Report</span></a></li>
                                  <li><a href="customer-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-user">
                                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="12" cy="7" r="4"></circle>
                                      </svg>
                                      <span>Customer Report</span></a></li>
                                  <li><a href="expense-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-file">
                                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                          <polyline points="13 2 13 9 20 9"></polyline>
                                      </svg>
                                      <span>Expense Report</span></a></li>
                                  <li><a href="income-report.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-bar-chart">
                                          <line x1="12" y1="20" x2="12" y2="10"></line>
                                          <line x1="18" y1="20" x2="18" y2="4"></line>
                                          <line x1="6" y1="20" x2="6" y2="16"></line>
                                      </svg>
                                      <span>Income Report</span></a></li>
                                  <li><a href="tax-reports.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-database">
                                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                      </svg>
                                      <span>Tax Report</span></a></li>
                                  <li><a href="profit-and-loss.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-pie-chart">
                                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                      </svg>
                                      <span>Profit &amp; Loss</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">User Management</h6>
                              <ul>
                                  <li><a href="users.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-user-check">
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="8.5" cy="7" r="4"></circle>
                                          <polyline points="17 11 19 13 23 9"></polyline>
                                      </svg>
                                      <span>Users</span></a></li>
                                  <li><a href="roles-permissions.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-shield">
                                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                      </svg>
                                      <span>Roles &amp; Permissions</span></a></li>
                                  <li><a href="delete-account.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-lock">
                                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                      </svg>
                                      <span>Delete Account Request</span></a></li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Pages</h6>
                              <ul>
                                  <li><a href="profile.html">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-user">
                                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="12" cy="7" r="4"></circle>
                                      </svg>
                                      <span>Profile</span></a></li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-shield">
                                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                          </svg>
                                          <span>Authentication</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Login<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="signin.html">Cover</a></li>
                                                  <li><a href="signin-2.html">Illustration</a></li>
                                                  <li><a href="signin-3.html">Basic</a></li>
                                              </ul>
                                          </li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Register<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="register.html">Cover</a></li>
                                                  <li><a href="register-2.html">Illustration</a></li>
                                                  <li><a href="register-3.html">Basic</a></li>
                                              </ul>
                                          </li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="forgot-password.html">Cover</a></li>
                                                  <li><a href="forgot-password-2.html">Illustration</a></li>
                                                  <li><a href="forgot-password-3.html">Basic</a></li>
                                              </ul>
                                          </li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="reset-password.html">Cover</a></li>
                                                  <li><a href="reset-password-2.html">Illustration</a></li>
                                                  <li><a href="reset-password-3.html">Basic</a></li>
                                              </ul>
                                          </li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="email-verification.html">Cover</a></li>
                                                  <li><a href="email-verification-2.html">Illustration</a></li>
                                                  <li><a href="email-verification-3.html">Basic</a></li>
                                              </ul>
                                          </li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="two-step-verification.html">Cover</a></li>
                                                  <li><a href="two-step-verification-2.html">Illustration</a></li>
                                                  <li><a href="two-step-verification-3.html">Basic</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="lock-screen.html">Lock Screen</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-file-minus">
                                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                              <polyline points="14 2 14 8 20 8"></polyline>
                                              <line x1="9" y1="15" x2="15" y2="15"></line>
                                          </svg>
                                          <span>Error Pages</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="error-404.html">404 Error </a></li>
                                          <li><a href="error-500.html">500 Error </a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-map">
                                              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                              <line x1="8" y1="2" x2="8" y2="18"></line>
                                              <line x1="16" y1="6" x2="16" y2="22"></line>
                                          </svg>
                                          <span>Places</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="countries.html">Countries</a></li>
                                          <li><a href="states.html">States</a></li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="blank-page.html">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-file">
                                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                              <polyline points="13 2 13 9 20 9"></polyline>
                                          </svg>
                                          <span>Blank Page</span> </a>
                                  </li>
                                  <li>
                                      <a href="coming-soon.html">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-send">
                                              <line x1="22" y1="2" x2="11" y2="13"></line>
                                              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                          </svg>
                                          <span>Coming Soon</span> </a>
                                  </li>
                                  <li>
                                      <a href="under-maintenance.html">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-alert-triangle">
                                              <path
                                                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                              <line x1="12" y1="9" x2="12" y2="13"></line>
                                              <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                          </svg>
                                          <span>Under Maintenance</span> </a>
                                  </li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Settings</h6>
                              <ul>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-settings">
                                              <circle cx="12" cy="12" r="3"></circle>
                                              <path
                                                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                          </svg>
                                          <span>General Settings</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="general-settings.html">Profile</a></li>
                                          <li><a href="security-settings.html">Security</a></li>
                                          <li><a href="notification.html">Notifications</a></li>
                                          <li><a href="connected-apps.html">Connected Apps</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-globe">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <line x1="2" y1="12" x2="22" y2="12"></line>
                                              <path
                                                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                          </svg>
                                          <span>Website Settings</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="system-settings.html">System Settings</a></li>
                                          <li><a href="company-settings.html">Company Settings </a></li>
                                          <li><a href="localization-settings.html">Localization</a></li>
                                          <li><a href="prefixes.html">Prefixes</a></li>
                                          <li><a href="preference.html">Preference</a></li>
                                          <li><a href="appearance.html">Appearance</a></li>
                                          <li><a href="social-authentication.html">Social Authentication</a></li>
                                          <li><a href="language-settings.html">Language</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-smartphone">
                                              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                              <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                          </svg>
                                          <span>App Settings</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="invoice-settings.html">Invoice</a></li>
                                          <li><a href="printer-settings.html">Printer</a></li>
                                          <li><a href="pos-settings.html">POS</a></li>
                                          <li><a href="custom-fields.html">Custom Fields</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-monitor">
                                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                              <line x1="8" y1="21" x2="16" y2="21"></line>
                                              <line x1="12" y1="17" x2="12" y2="21"></line>
                                          </svg>
                                          <span>System Settings</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="email-settings.html">Email</a></li>
                                          <li><a href="sms-gateway.html">SMS Gateways</a></li>
                                          <li><a href="otp-settings.html">OTP</a></li>
                                          <li><a href="gdpr-settings.html">GDPR Cookies</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-dollar-sign">
                                              <line x1="12" y1="1" x2="12" y2="23"></line>
                                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                          </svg>
                                          <span>Financial Settings</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="payment-gateway-settings.html">Payment Gateway</a></li>
                                          <li><a href="bank-settings-grid.html">Bank Accounts</a></li>
                                          <li><a href="tax-rates.html">Tax Rates</a></li>
                                          <li><a href="currency-settings.html">Currencies</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-hexagon">
                                              <path
                                                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                          </svg>
                                          <span>Other Settings</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="storage-settings.html">Storage</a></li>
                                          <li><a href="ban-ip-address.html">Ban IP Address</a></li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="signin.html">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-log-out">
                                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                              <polyline points="16 17 21 12 16 7"></polyline>
                                              <line x1="21" y1="12" x2="9" y2="12"></line>
                                          </svg>
                                          <span>Logout</span> </a>
                                  </li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">UI Interface</h6>
                              <ul>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-layers">
                                              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                              <polyline points="2 17 12 22 22 17"></polyline>
                                              <polyline points="2 12 12 17 22 12"></polyline>
                                          </svg>
                                          <span>Base UI</span><span className="menu-arrow"></span>
                                      </a>
                                      <ul>
                                          <li><a href="ui-alerts.html">Alerts</a></li>
                                          <li><a href="ui-accordion.html">Accordion</a></li>
                                          <li><a href="ui-avatar.html">Avatar</a></li>
                                          <li><a href="ui-badges.html">Badges</a></li>
                                          <li><a href="ui-borders.html">Border</a></li>
                                          <li><a href="ui-buttons.html">Buttons</a></li>
                                          <li><a href="ui-buttons-group.html">Button Group</a></li>
                                          <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                          <li><a href="ui-cards.html">Card</a></li>
                                          <li><a href="ui-carousel.html">Carousel</a></li>
                                          <li><a href="ui-colors.html">Colors</a></li>
                                          <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                                          <li><a href="ui-grid.html">Grid</a></li>
                                          <li><a href="ui-images.html">Images</a></li>
                                          <li><a href="ui-lightbox.html">Lightbox</a></li>
                                          <li><a href="ui-media.html">Media</a></li>
                                          <li><a href="ui-modals.html">Modals</a></li>
                                          <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                                          <li><a href="ui-pagination.html">Pagination</a></li>
                                          <li><a href="ui-popovers.html">Popovers</a></li>
                                          <li><a href="ui-progress.html">Progress</a></li>
                                          <li><a href="ui-placeholders.html">Placeholders</a></li>
                                          <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                          <li><a href="ui-spinner.html">Spinner</a></li>
                                          <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                                          <li><a href="ui-nav-tabs.html">Tabs</a></li>
                                          <li><a href="ui-toasts.html">Toasts</a></li>
                                          <li><a href="ui-tooltips.html">Tooltips</a></li>
                                          <li><a href="ui-typography.html">Typography</a></li>
                                          <li><a href="ui-video.html">Video</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-layers">
                                              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                              <polyline points="2 17 12 22 22 17"></polyline>
                                              <polyline points="2 12 12 17 22 12"></polyline>
                                          </svg>
                                          <span>Advanced UI</span><span className="menu-arrow"></span>
                                      </a>
                                      <ul>
                                          <li><a href="ui-ribbon.html">Ribbon</a></li>
                                          <li><a href="ui-clipboard.html">Clipboard</a></li>
                                          <li><a href="ui-drag-drop.html">Drag &amp; Drop</a></li>
                                          <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                          <li><a href="ui-rating.html">Rating</a></li>
                                          <li><a href="ui-text-editor.html">Text Editor</a></li>
                                          <li><a href="ui-counter.html">Counter</a></li>
                                          <li><a href="ui-scrollbar.html">Scrollbar</a></li>
                                          <li><a href="ui-stickynote.html">Sticky Note</a></li>
                                          <li><a href="ui-timeline.html">Timeline</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-bar-chart-2">
                                              <line x1="18" y1="20" x2="18" y2="10"></line>
                                              <line x1="12" y1="20" x2="12" y2="4"></line>
                                              <line x1="6" y1="20" x2="6" y2="14"></line>
                                          </svg>
                                          <span>Charts</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="chart-apex.html">Apex Charts</a></li>
                                          <li><a href="chart-c3.html">Chart C3</a></li>
                                          <li><a href="chart-js.html">Chart Js</a></li>
                                          <li><a href="chart-morris.html">Morris Charts</a></li>
                                          <li><a href="chart-flot.html">Flot Charts</a></li>
                                          <li><a href="chart-peity.html">Peity Charts</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-database">
                                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                          </svg>
                                          <span>Icons</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                          <li><a href="icon-feather.html">Feather Icons</a></li>
                                          <li><a href="icon-ionic.html">Ionic Icons</a></li>
                                          <li><a href="icon-material.html">Material Icons</a></li>
                                          <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                                          <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                                          <li><a href="icon-themify.html">Themify Icons</a></li>
                                          <li><a href="icon-weather.html">Weather Icons</a></li>
                                          <li><a href="icon-typicon.html">Typicon Icons</a></li>
                                          <li><a href="icon-flag.html">Flag Icons</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-edit">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                          </svg>
                                          <span>Forms</span><span className="menu-arrow"></span>
                                      </a>
                                      <ul>
                                          <li className="submenu submenu-two">
                                              <a href="javascript:void(0);">Form Elements<span
                                                  className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                                                  <li><a href="form-checkbox-radios.html">Checkbox &amp; Radios</a></li>
                                                  <li><a href="form-input-groups.html">Input Groups</a></li>
                                                  <li><a href="form-grid-gutters.html">Grid &amp; Gutters</a></li>
                                                  <li><a href="form-select.html">Form Select</a></li>
                                                  <li><a href="form-mask.html">Input Masks</a></li>
                                                  <li><a href="form-fileupload.html">File Uploads</a></li>
                                              </ul>
                                          </li>
                                          <li className="submenu submenu-two">
                                              <a href="javascript:void(0);">Layouts<span className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="form-horizontal.html">Horizontal Form</a></li>
                                                  <li><a href="form-vertical.html">Vertical Form</a></li>
                                                  <li><a href="form-floating-labels.html">Floating Labels</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="form-validation.html">Form Validation</a></li>
                                          <li><a href="form-select2.html">Select2</a></li>
                                          <li><a href="form-wizard.html">Form Wizard</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-columns">
                                              <path
                                                  d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                                          </svg>
                                          <span>Tables</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="tables-basic.html">Basic Tables </a></li>
                                          <li><a href="data-tables.html">Data Table </a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="submenu-open">
                              <h6 className="submenu-hdr">Help</h6>
                              <ul>
                                  <li><a href="javascript:void(0);">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-file-text">
                                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                          <polyline points="14 2 14 8 20 8"></polyline>
                                          <line x1="16" y1="13" x2="8" y2="13"></line>
                                          <line x1="16" y1="17" x2="8" y2="17"></line>
                                          <polyline points="10 9 9 9 8 9"></polyline>
                                      </svg>
                                      <span>Documentation</span></a></li>
                                  <li><a href="javascript:void(0);">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-lock">
                                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                      </svg>
                                      <span>Changelog v2.0.7</span></a></li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                               stroke-linejoin="round" className="feather feather-file-minus">
                                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                              <polyline points="14 2 14 8 20 8"></polyline>
                                              <line x1="9" y1="15" x2="15" y2="15"></line>
                                          </svg>
                                          <span>Multi Level</span><span className="menu-arrow"></span></a>
                                      <ul>
                                          <li><a href="javascript:void(0);">Level 1.1</a></li>
                                          <li className="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span
                                              className="menu-arrow inside-submenu"></span></a>
                                              <ul>
                                                  <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                  <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level
                                                      2.2<span className="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                      <ul>
                                                          <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                          <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="slimScrollBar"
                   style={{background: 'rgb(204, 204, 204)', width: '7px', position: 'absolute', top: '0px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: '99', right: '1px', height: '30px'}}></div>
              <div className="slimScrollRail"
                   style={{width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px'}}></div>
          </div>
      </div>
  );
}
