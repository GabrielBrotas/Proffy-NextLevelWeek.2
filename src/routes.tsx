import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// yarn add @types/react-router-dom - D, para instalar apenas em desenvolvimento e não subir a dependencia para produçao

// Pages
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterConfirmed from './pages/RegisterCheck'
import ResetPassword from './pages/ResetPassword'
import ResetPasswordConfirmed from './pages/ResetPasswordCheck'
import AuthRoute from './utils/AuthRoute'

function Routes() {
    return (
        <BrowserRouter>
            <AuthRoute path="/" exact component={Landing}/>
            <AuthRoute path="/study" component={TeacherList} /> 
            <AuthRoute path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/register-confirm" component={RegisterConfirmed} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/reset-password-confirm" component={ResetPasswordConfirmed} />
        </BrowserRouter>
    )
}

export default Routes