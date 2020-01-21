import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main"
import Edit from './components/Edit';
import Create from './components/Create';
import BookGetLimit from './components/BookGetLimit';
import Show from './components/Show';
import CreateUser from "./components/users/Create";
import UserList from "./components/users/userList";
import Test from "./components/users/Test";

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Main}/>
                <Route path='/edit/:id' component={Edit} />
                <Route path='/create' component={Create} />
                <Route path='/show/:id' component={Show} />
                <Route path='/book/limit' component={BookGetLimit} />
                <Route path='/user/create' component={CreateUser} />
                <Route path='/list/user' component={UserList} />
                <Route path='/test' component={Test} />

            </div>
        </Router>
    );

}


export default App;
