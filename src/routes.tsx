import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// yarn add @types/react-router-dom - D, para instalar apenas em desenvolvimento e não subir a dependencia para produçao


// Pages
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Login from './pages/Login'
import Register from './pages/Register'
import ConfirmRegister from './pages/ConfirmRegister'

function Routes() {
    return (
        <BrowserRouter>
            {/* exact faz um verificação de igualdade, caso nao tenha, todas as paginas que tiverem '/' vai renderizar a landing*/}
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeacherList} /> 
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/confirm" component={ConfirmRegister} />
        </BrowserRouter>
    )
}

export default Routes