import React from 'react'
import { Routes ,Route, Router } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'

import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'

import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'

import Home from '../body/home/Home'

import {useSelector} from 'react-redux'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Router>
                <routes>
                    <Route path="/" component={Home} exact />

                    <Route path="/login" component={isLogged ? NotFound : Login} exact />
                    <Route path="/register" component={isLogged ? NotFound : Register} exact />

                    <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                    <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                    <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                    <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                    <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />
                </routes>
            </Router>
        </section>
    )
}

export default Body
