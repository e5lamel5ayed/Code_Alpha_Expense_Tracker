/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Mobile() {
    return (
        <div id='Mobile'>
            <div className='container py-5 mt-5' >
                <div className='row align-items-center justify-content-between'>
                    <div className='col-lg-6 col-xs-12'>
                        <div className='d-flex shape'>
                            <img className='mx-auto mobile-img ' src='/Imges/submit_on_the_go.webp' />
                        </div>
                    </div>
                    <div className='col-lg-5 pb-5 col-xs-12 mt-auto mb-auto'>
                        <h2 className='submit-text d-flex text-center mt-5'>

                            <span className='go-span'>Submit on the go </span>
                        </h2>
                        <p style={{ color: "#111827" }}>
                            <strong>Submit expenses right from your phone! </strong>
                            <span className='text-muted'>Whether emailing an expense or uploading a receipt using Esoo's mobile app, never forget to log an expense by submitting receipts on the go, as you collect them!</span>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
