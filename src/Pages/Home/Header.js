import React from 'react';
import {Link} from "react-router-dom";
export default function Header() {
    return (
        <div>

            <div className='container mt-5 pt-5'>
                <div className="row mt-4">
                    <div className='col-md-12 text-center'>
                        <h1 className='header-text'>
                            <span class="stop-text">Stop </span>
                            chasing paper
                            <span class="receipts-text"> receipts</span>
                        </h1>
                    </div>
                    <div className='col-md-12 text-center'>
                        <p class="lead mb-5" style={{ fontSize: "1.5rem" }}>
                            <strong
                                style={{ color: "#714b67", fontWeight: "600" }}
                            >Esoo Expenses </strong>
                            keeps everything organized so you can say goodbye to <br></br> that envelope of receipts!
                        </p>
                    </div>
                    <div className='row mr-auto ml-auto mb-2'>
                        <Link to="../addExpense">
                        <button className='btn btn-start mx-3'>Start now - It's free</button>
                        </Link>
                        <Link to="../expenseList">
                        <button className='btn btn-demo'>Schedule a demo</button>
                        </Link>
                        
                    </div>
                </div>
                <div className='text-center'>
                    <p>Free, forever, with unlimited users.
                        <span className='why'> See why
                            <p className='hover-messege' >Your first app is always free with Esoo, including free hosting & support. You'll only have to pay if you install more applications.</p>
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}
