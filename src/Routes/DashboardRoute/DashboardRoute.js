import React from 'react';

import DashboardPage from '../../Components/DashboardPage/DashboardPage';

export default class DashboardRoute extends React.Component{
    render(){
        return(
            <section>
                <p>Hello Dashboard! </p>
                <DashboardPage />
            </section>
        )
    }
};