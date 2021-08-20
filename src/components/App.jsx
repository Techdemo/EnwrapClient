import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

const Prime = lazy(() => import('./modules/Prime'));

const App = () => {
  return (
    <main>
      <Suspense fallback={<span>loading</span>}>
        <Switch>
          <Route path="/" component={Prime} exact />
        </Switch>
      </Suspense>
    </main>
  )
}

export default withRouter(App);
