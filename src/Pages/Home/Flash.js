import React from 'react'

export default function Flash() {
    return (
        <div>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='flash'>
                            Reimburse or reinvoice in a <span className='flash-span'>flash</span>
                        </h2>
                    </div>
                    <div className='col-md-12 d-flex flex-wrap'>
                        <div className='col-lg-6 col-sm-12'>
                            <p className='flash-text'>
                                <strong>Who should really be paid? </strong>
                                Some expenses should be paid for by the client, and others by the business. Specify expenses that should be reimbursed to the employee or reinvoiced to a customer.<br></br>
                                Sales orders are automatically updated once expenses to reinvoice are approved. Employees are reimbursed with just a few clicks, no need to go into the accounting app!
                            </p>
                        </div>
                        <div class="col-lg-6 col-sm-12 position-relative pb-5">
                            <img src="https://odoocdn.com/openerp_website/static/src/img/apps/expenses/expense_tracking.webp" class="img-thumbnail position-absolute end-0 w-25 mt-n5  " alt="" loading="lazy" />
                                <img src="https://odoocdn.com/openerp_website/static/src/img/apps/expenses/reimburse.webp" class="img-thumbnail" loading="eager" alt=""/>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
            )
}
