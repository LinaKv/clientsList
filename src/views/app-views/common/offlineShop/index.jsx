import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const OfflineShop = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route path={`${match.url}/addresses`} component={lazy(() => import(`./addresses`))} />
                <Route path={`${match.url}/geofences`} component={lazy(() => import(`./geofences`))} />
                <Redirect from={`${match.url}`} to={`${match.url}/default`} />
            </Switch>
        </Suspense>
    );
};

export default OfflineShop;
