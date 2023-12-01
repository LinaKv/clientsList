import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Commons = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
                <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
                <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
                <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
                <Route path={`${match.url}/offlineShop`} component={lazy(() => import(`./offlineShop`))} />
                <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
                <Route path={`${match.url}/mailings`} component={lazy(() => import(`./mailings`))} />
                <Route path={`${match.url}/promotionalСodes`} component={lazy(() => import(`./promotionalСodes`))} />
                <Redirect from={`${match.url}`} to={`${match.url}/default`} />
            </Switch>
        </Suspense>
    );
};

export default Commons;
