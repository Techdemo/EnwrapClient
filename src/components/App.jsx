import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

const Prime = lazy(() => import('./modules/Prime'));
const ExampleForm = lazy(() => import('./modules/ExampleForm'));

const App = () => {
  return (
    <main>
      <Suspense fallback={<span>loading</span>}>
        <Switch>
          <Route path="/" component={Prime} exact />
          <Route path="/form" component={ExampleForm} exact />
        </Switch>
      </Suspense>
    </main>
  )
}

export default withRouter(App);
