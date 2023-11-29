import React from "react";
import Meta from "../../Components/Meta";
import "./Admin.css";
import BreadCrumb from "../../Components/BreadCrumb";
import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import AdminHeader from "./AdminHeader";

const AdminDashBoard = () => {
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="row ">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>

            <div className="col-10">
              <h1 className="main-header text-center ">Admin Dashboard</h1>
              <div class="main_content_iner ">
                <div class="container-fluid plr_30 body_white_bg pt_30">
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="single_element">
                        <div class="quick_activity">
                          <div class="row">
                            <div class="col-12">
                              <div class="quick_activity_wrap">
                                <div class="single_quick_activity">
                                  <h4>Total Income</h4>
                                  <h3>
                                    $ <span class="counter">5,79,000</span>
                                  </h3>
                                  <p>Saved 25%</p>
                                </div>
                                <div class="single_quick_activity">
                                  <h4>Total Expences</h4>
                                  <h3>
                                    $ <span class="counter">79,000</span>
                                  </h3>
                                  <p>Saved 25%</p>
                                </div>
                                <div class="single_quick_activity">
                                  <h4>Cash on Hand</h4>
                                  <h3>
                                    $ <span class="counter">92,000</span>
                                  </h3>
                                  <p>Saved 25%</p>
                                </div>
                                <div class="single_quick_activity">
                                  <h4>Net Profit Margin</h4>
                                  <h3>
                                    $ <span class="counter">1,79,000</span>
                                  </h3>
                                  <p>Saved 65%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-xl-6">
                      <div class="white_box mb-3 min_430">
                        <div class="box_header  box_header_block ">
                          <div class="main-title">
                            <h3 class="mb-0">AP and AR Balance</h3>
                            <span>Avg. $5,309</span>
                          </div>
                          <div class="box_select d-flex">
                            <select class="nice_Select2 mr_5">
                              <option value="1">Monthly</option>
                              <option value="1">Weekly</option>
                            </select>
                            <select class="nice_Select2 ">
                              <option value="1">Last Year</option>
                              <option value="1">this Year</option>
                            </select>
                          </div>
                        </div>

                        <div id="bar_active">
                          <svg width="650" height="400">
                            <g transform="translate(40,2)">
                              <g class="x axis" transform="translate(-6,370)">
                                <g
                                  class="tick"
                                  transform="translate(30,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line y2="6" x2="0"></line>

                                  <text
                                    dy=".71em"
                                    y="9"
                                    x="0"
                                    style={{ textAnchor: "middle" }}
                                  >
                                    A
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(64,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line y2="6" x2="0"></line>

                                  <text
                                    dy=".71em"
                                    y="9"
                                    x="0"
                                    style={{ textAnchor: "middle" }}
                                  >
                                    B
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(98,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line y2="6" x2="0"></line>
                                  <text
                                    dy=".71em"
                                    y="9"
                                    x="0"
                                    style={{ textAnchor: "middle" }}
                                  >
                                    C
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(132,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line y2="6" x2="0"></line>
                                  <text
                                    dy=".71em"
                                    y="9"
                                    x="0"
                                    style={{ textAnchor: "middle" }}
                                  >
                                    D
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(166,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line y2="6" x2="0"></line>
                                  <text
                                    dy=".71em"
                                    y="9"
                                    x="0"
                                    style={{ textAnchor: "middle" }}
                                  >
                                    E
                                  </text>
                                </g>

                                <path class="domain" d="M0,6V0H400V6"></path>
                              </g>
                              <g class="y axis">
                                <g
                                  class="tick"
                                  transform="translate(0,375)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>

                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    0%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,340)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>

                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    10%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,305)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    20%
                                  </text>
                                </g>

                                <g
                                  class="tick"
                                  transform="translate(0,270)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    30%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,235)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    40%
                                  </text>
                                </g>

                                <g
                                  class="tick"
                                  transform="translate(0,200)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    50%
                                  </text>
                                </g>

                                <g
                                  class="tick"
                                  transform="translate(0,165)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    60%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,130)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    70%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,95)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    80%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,60)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".32em"
                                    x="-9"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    90%
                                  </text>
                                </g>
                                <g
                                  class="tick"
                                  transform="translate(0,25)"
                                  style={{ opacity: "1" }}
                                >
                                  <line x2="-6" y2="0"></line>
                                  <text
                                    dy=".33em"
                                    x="-5"
                                    y="0"
                                    style={{ textAnchor: "end" }}
                                  >
                                    &nbsp; 100%
                                  </text>
                                </g>

                                <path class="domain" d="M-6,0H0V375H-6"></path>

                                <text
                                  transform="rotate(-90)"
                                  y="6"
                                  dy=".71em"
                                  style={{ textAnchor: "end" }}
                                >
                                  Frequency
                                </text>
                              </g>

                              <rect
                                class="bar"
                                x="10"
                                width="31"
                                y="90"
                                height="285"
                              ></rect>

                              <rect
                                class="bar"
                                x="44"
                                width="31"
                                y="321"
                                height="52.85781766650922"
                              ></rect>

                              <rect
                                class="bar"
                                x="78"
                                width="31"
                                y="220"
                                height="152"
                              ></rect>

                              <rect
                                class="bar"
                                x="112"
                                width="31"
                                y="190"
                                height="185"
                              ></rect>

                              <rect
                                class="bar"
                                x="146"
                                width="31"
                                y="50"
                                height="325"
                              ></rect>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 ">
                      <div class="white_box mb-3 min_430">
                        <div class="box_header  box_header_block">
                          <div class="main-title">
                            <h3 class="mb-0">% of Income Budget</h3>
                          </div>
                        </div>
                        <div id="radial_2"></div>
                        <div class="radial_footer">
                          <svg
                            width="200"
                            height="200"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* <!-- Create a circle as the background --> */}
                            <circle cx="100" cy="100" r="80" fill="#f0f0f0" />

                            {/* <!-- Define the pie chart slice using path --> */}
                            <path
                              d="M100,100 L100,20 A80,80 0 0,1 180,100 Z"
                              fill="#ff5733"
                            />

                            {/* <!-- Optional: Add a label or legend --> */}
                            <text x="100" y="120" text-anchor="middle">
                              Label 1
                            </text>
                          </svg>
                          <div class="radial_footer_inner d-flex justify-content-between">
                            <div class="left_footer">
                              <h5>
                                <span style={{ background: "#EDECFE" }}></span>
                                Blance
                              </h5>
                              <p>-$18,570</p>
                            </div>
                            <div class="left_footer">
                              <h5>
                                <span style={{ background: "#A4A1FB" }}></span>
                                Blance
                              </h5>
                              <p>$31,430</p>
                            </div>
                          </div>
                          <div class="radial_bottom">
                            <p>
                              <a href="#">View Full Report</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                      <div class="white_box min_430">
                        <div class="box_header  box_header_block">
                          <div class="main-title">
                            <h3 class="mb-0">% of Expenses Budget</h3>
                          </div>
                        </div>

                        <svg width="180" height="200">
                          {/* <!-- Create the x-axis line --> */}
                          <line
                            x1="0"
                            y1="150"
                            x2="350"
                            y2="150"
                            stroke="black"
                            stroke-width="2"
                          />

                          {/* <!-- Create the y-axis line --> */}
                          <line
                            x1="0"
                            y1="150"
                            x2="00"
                            y2="0"
                            stroke="black"
                            stroke-width="2"
                          />

                          {/* <!-- Define data points and draw the line --> */}
                          <polyline
                            points="0,150 20,100 50,130 80,120 120,90 160,40 175,10"
                            fill="none"
                            stroke="blue"
                            stroke-width="2"
                          />

                          {/* <!-- Optional: Add data point circles and labels --> */}
                          <circle cx="20" cy="100" r="4" fill="blue" />
                          <circle cx="50" cy="130" r="4" fill="blue" />
                          <circle cx="80" cy="120" r="4" fill="blue" />
                          <circle cx="120" cy="90" r="4" fill="blue" />
                          <circle cx="160" cy="40" r="4" fill="blue" />
                          <circle cx="175" cy="10" r="4" fill="blue" />

                          <text x="5" y="170" text-anchor="middle">
                            0
                          </text>
                          <text x="30" y="170" text-anchor="middle">
                            1
                          </text>
                          <text x="55" y="170" text-anchor="middle">
                            2
                          </text>
                          <text x="80" y="170" text-anchor="middle">
                            3
                          </text>
                          <text x="105" y="170" text-anchor="middle">
                            4
                          </text>
                          <text x="135" y="170" text-anchor="middle">
                            5
                          </text>
                          <text x="160" y="170" text-anchor="middle">
                            6
                          </text>
                        </svg>
                        <div id="radial_1"></div>
                        <div class="radial_footer">
                          <div class="radial_footer_inner d-flex justify-content-between">
                            <div class="left_footer">
                              <h5>
                                <span style={{ background: "#EDECFE" }}></span>
                                Blance
                              </h5>
                              <p>-$18,570</p>
                            </div>
                            <div class="left_footer">
                              <h5>
                                <span style={{ background: "#A4A1FB" }}></span>
                                Blance
                              </h5>
                              <p>$31,430</p>
                            </div>
                          </div>
                          <div class="radial_bottom">
                            <p>
                              <a href="#">View Full Report</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-xl-6">
                      <div class="white_box mb-3 min_430">
                        <div class="box_header  box_header_block">
                          <div class="main-title">
                            <h3 class="mb-0">
                              EBIT (Earnings Before Interest & Tax)
                            </h3>
                          </div>
                        </div>
                        <canvas height="200" id="visit-sale-chart"></canvas>
                      </div>
                    </div>
                    <div class="col-lg-12 col-xl-6">
                      <div class="white_box mb_30 min_430">
                        <div class="box_header  box_header_block align-items- ">
                          <div class="main-title">
                            <h3 class="mb-0">Cost of goods / Services</h3>
                          </div>
                          <div class="title_info">
                            <p>
                              1 Jan 2020 to 31 Dec 2020 <br />
                              <div class="legend_style text-end">
                                <li>
                                  <span
                                    style={{ background: "#EDECFE" }}
                                  ></span>
                                  Services
                                </li>
                                <li class="inactive">
                                  <span
                                    style={{ background: "#EDECFE" }}
                                  ></span>
                                  Avarage
                                </li>
                              </div>
                            </p>
                          </div>
                        </div>
                        <canvas height="200" id="visit-sale-chart2"></canvas>
                      </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                      <div class="white_box mb_30 min_400">
                        <div class="box_header ">
                          <div class="main-title">
                            <h3 class="mb-0">Disputed vs Overdue Invoices</h3>
                          </div>
                        </div>
                        <canvas height="220px" id="doughutChart"></canvas>
                        <div class="legend_style mt_10px ">
                          <li class="d-block">
                            <span style={{ background: "#EDECFE" }}></span>
                            Disputed Invoices
                          </li>
                          <li class="d-block">
                            <span style={{ background: "#EDECFE" }}></span>
                            Avarage
                          </li>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-xl-6">
                      <div class="white_box mb_30 min_400 ">
                        <div class="box_header  box_header_block">
                          <div class="main-title">
                            <h3 class="mb-0">Disputed Invoices</h3>
                          </div>
                          <div class="legend_style mt-10">
                            <li>
                              <span></span> Disputed Invoices
                            </li>
                            <li class="inactive">
                              <span></span> Avarage
                            </li>
                          </div>
                        </div>
                        <div class="title_btn">
                          <ul>
                            <li>
                              <a class="active" href="#">
                                All time
                              </a>
                            </li>
                            <li>
                              <a href="#">This year</a>
                            </li>
                            <li>
                              <a href="#">This week</a>
                            </li>
                            <li>
                              <a href="#">Today</a>
                            </li>
                          </ul>
                        </div>
                        <canvas height="120px" id="sales-chart"></canvas>
                      </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                      <div class="white_box mb_30 min_400">
                        <div class="box_header  box_header_block">
                          <div class="main-title">
                            <h3 class="mb-0">Disputed vs Overdue Invoices</h3>
                          </div>
                        </div>
                        <canvas height="220px" id="doughutChart2"></canvas>
                        <div class="legend_style legend_style_grid mt_10px">
                          <li class="d-block">
                            <span style={{ background: "#EDECFE" }}></span> 30
                            Days
                          </li>
                          <li class="d-block">
                            <span style={{ background: "#EDECFE" }}></span> 60
                            Days
                          </li>
                          <li class="d-block">
                            <span style={{ background: "#EDECFE" }}></span> 90
                            Days
                          </li>
                          <li class="d-block">
                            <span style={{ background: "#EDECFE" }}></span>
                            90+Days
                          </li>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="white_box min_400">
                        <div class="box_header  box_header_block">
                          <div class="main-title">
                            <h3 class="mb-0">
                              EBIT (Earnings Before Interest & Tax)
                            </h3>
                          </div>
                          <div class="title_info">
                            <p>1 Jan 2020 to 31 Dec 2020</p>
                          </div>
                        </div>
                        <div id="area_active"></div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="white_box mb_30 min_400">
                        <div class="box_header ">
                          <div class="main-title">
                            <h3 class="mb-0">Inventory Turnover</h3>
                          </div>
                        </div>
                        <div id="stackbar_active"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
