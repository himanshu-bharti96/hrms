import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                this is nav
            </nav>
            <div className="main-container">
                Here are children
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;