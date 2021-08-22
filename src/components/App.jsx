import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './modules/theme/theme'

const Prime = lazy(() => import('./modules/Prime'));
const ExampleForm = lazy(() => import('./modules/ExampleForm'));
const Login = lazy(() => import('./pages/Login'))
const QuotationForm = lazy(() => import('./pages/FormPage'))
const MultistepForm = lazy(() => import('./pages/ProgDisc'))

const App = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<span>loading</span>}>
          <Switch>
            <Route path="/" component={Prime} exact />
            <Route path="/form" component={ExampleForm} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/quotation" component={QuotationForm} exact />
            <Route path="/multistep" component={MultistepForm} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </main>
  )
}

export default withRouter(App);
