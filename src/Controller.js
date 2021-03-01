import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './componenet/dashboardLayout/DashboardLayout';

const Controller = () => {
    return (
        <Router>
            <DashboardLayout>
                Dashboard Layout
                <Switch>
                    <Route>

                    </Route>
                </Switch>
            </DashboardLayout>
        </Router>
    )
}

export default Controller;