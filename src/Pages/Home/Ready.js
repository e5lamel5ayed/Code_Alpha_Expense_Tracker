/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Ready() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div class="col-lg-12 pb-7 text-center">
                        <h2 class="ready mb-5">
                            <span class="x_wd_red_highlight_02">Ready, </span>
                            <span class="x_wd_yellow_highlight_01">set, </span>
                            <span class="x_wd_green_highlight_03">expense! </span>
                        </h2>
                        <p ><strong> Expense categories are pre-configured!</strong><span className='text-muted'> When the Expenses app is installed, a set of pre-loaded expense categories are available so you can start creating expense records right away.</span> </p>
                    </div>

                    <div className='col-md-12 ready-img mt-5 pt-5 mb-5 '>
                        <img className='img-thumbnail-2' src='/Imges/ready_set_expense.webp'></img>
                    </div>

                </div>

            </div>
        </div>
    )
}
