import React from 'react'

export default function Records() {
    return (
        <div>
            <div className='container mt-5 mb-5 pb-5'>
                <div className='row align-items-center justify-content-center'>
                    <div className="col-lg-10 text-lg-center pb-5">
                        <h2 className='mb-5 records'>
                            Four ways to create records
                        </h2>
                        <p style={{
                            color: " #111827",
                            fontWeight: "600",
                            fontSize: "1.3rem"
                        }}>
                            <strong >Email, scan, drag and drop, or manual.</strong>
                            <span className='text-muted'> Add expenses by sending an email using expense codes, scan in a receipt, drag and drop a receipt into the Expenses app dashboard, or manually type in an expense - from your phone or computer!</span></p>
                    </div>
                </div>

                <div style={{fontFamily: "Life Savers",fontStyle: "italic"}} className='row g-0 bg-200 rounded-pill text-center px-6'>
                    <div class="col-6 col-lg-3 pt-5 pb-5">
                        <img src="https://odoocdn.com/openerp_website/static/src/img/icons/mail.svg" height="80px" class="mx-auto mb-4 mt-2" alt="" loading="lazy" />
                        <h5 class="display-5">Email</h5>
                    </div>
                    <div class="col-6 col-lg-3 pt-5 pb-5">
                        <img src="https://odoocdn.com/openerp_website/static/src/img/icons/red_scan.svg" height="80px" class="mx-auto mb-4 mt-2" alt="" loading="lazy" />
                        <h5 class="display-5">Scan</h5>
                    </div>
                    <div class="col-6 col-lg-3 pt-5 pb-5">
                        <img src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_drag-drop.svg" height="80px" class="mx-auto mb-4 mt-2" alt="" loading="lazy" />
                        <h5 class="display-5">Drag &amp; drop</h5>
                    </div>
                    <div class="col-6 col-lg-3 pt-5 pb-5">
                        <img src="https://odoocdn.com/openerp_website/static/src/img/icons/blue_file-invoice.svg" height="80px" class="mx-auto mb-4 mt-2" alt="" loading="lazy" />
                        <h5 class="display-5">Type in</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
