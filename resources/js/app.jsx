import './bootstrap';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

//sweetalert
import Swal from 'sweetalert2/dist/sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
window.Swal = Swal
const toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
})
window.toast = toast

import App from './components/App'

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
