import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Landing from './containers/Landing/Landing';
import Signup from './components/Signup/Signup';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Products from './components/Products/Product';
import Favourites from './components/Favourites/Favourites';
// const Home = React.lazy(() => {
//   return import('./containers/Home/Home')
// });

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home}/>
        <Route path='/products' exact component={Products} />
        <Route path='/favourites' exact component={Favourites} />
        <Route path='/' exact component={Landing} />
        <Redirect to= '/' />
      </Switch>
    )
    return (
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    );
  }
}

export default withRouter(App);
