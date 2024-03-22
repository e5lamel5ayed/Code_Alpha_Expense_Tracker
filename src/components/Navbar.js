/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Style.css';
import { Link } from 'react-router-dom';
// import { Link} from 'react-scroll';
export default function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container ">

                    <Link class="navbar-brand" to="/" style={{ fontSize: "24px", fontWeight: "600", color: " #888888" }}>
                        <span style={{ color: "#714b67" }}>E</span>soo
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse media-edit" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ml-auto ">
                            <li class="nav-item  nav-link-edit ">
                                <h2>

                                    <Link class=" nav-link" to="../addExpense">Expensess <i class="fa-solid fa-chevron-down"></i> </Link>
                                </h2>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link Overview-color " to="Mobile">Overview</Link>
                            </li>
                            <li class="nav-item nav-link-edit">
                                <Link class="nav-link Overview-edit" to="#">Features</Link>
                            </li>

                        </ul>
                        <form class="form-inline my-2 my-lg-0 form-responseve">
                            <button class="btn btn-sign " style={{ color: "#111827" }} type="submit">Sign in</button>
                            <Link to="../addExpense">
                            <button class="btn-try" type="submit">Try it free</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}
