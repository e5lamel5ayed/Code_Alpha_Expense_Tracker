import React from 'react'
import { Link } from 'react-router-dom'

export default function Unleash() {
    return (
        <div className='mb-2'>
            <div class="container text-center unleash ">
            <h3 class="disblay-6 mb-5">
                <span class="x_wd_display_fireworks_01">Unleash</span><br/> your <span class="text-o-color-2">growth potential</span>
            </h3>
            <Link class="btn btn-lg btn-primary mb-3" to="../addExpense">Start now - It's free</Link><br/>
                <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg" class="d-block mx-auto mb-2" alt="" loading="lazy" />
                    <small>No credit card required <br/> Instant access</small>
                </div>
            <div className='text-center'
            style={{fontSize:"1.5rem"}}
            >
            <i class="fa-solid fa-copyright mr-2"></i>
            <span className='mr-2'>2024 Esalm Elsayed</span>
            <a href='https://github.com/e5lamel5ayed'>
            <i class="fa-brands fa-github mr-2" style={{color:"#714b67"}}></i>
            </a>
            <a href='https://www.linkedin.com/in/eslam-elsayed-20a106266/'>
            <i class="fa-brands fa-linkedin mr-2" style={{color:"#714b67"}}></i>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100028014644253&mibextid=ZbWKwL'>
            <i class="fa-brands fa-facebook mr-2" style={{color:"#714b67"}}></i>
            </a>
            <a href='https://www.instagram.com/e5lam_el5ayed/'>
            <i class="fa-brands fa-instagram mr-1" style={{color:"#714b67"}}></i>
            </a>
            </div>
        </div>
            )
}
