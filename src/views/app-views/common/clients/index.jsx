import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const OfflineShop = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route path={`${match.url}/clientsList`} component={lazy(() => import(`./clientsList`))} />
                <Route path={`${match.url}/editUser/:userId`} component={lazy(() => import(`./editUser`))} />
                <Route path={`${match.url}/clientsGroups`} component={lazy(() => import(`./clientsGroups`))} />
                <Redirect from={`${match.url}`} to={`${match.url}/default`} />
            </Switch>
        </Suspense>
    );
};

export default OfflineShop;
