import React from "react";
import RegistrationForm from './components/RegistrationForm';
import ViewUsers from './components/ViewUsers';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App=()=>{
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Register</Link>
                        </li>
                        <li>
                            <Link to="/view">View Users</Link>
                        </li>
                        <li>
                            <Link to="/update">Update User</Link>
                        </li>
                        <li>
                            <Link to="/delete">Delete User</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <RegistrationForm />
                    </Route>
                    <Route path="/view">
                        <ViewUsers />
                    </Route>
                    <Route path="/update">
                        <UpdateUser />
                    </Route>
                    <Route path="/delete">
                        <DeleteUser />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;