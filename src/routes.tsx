import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './pages/home/home';

// merge or create new routes here
const routes = [{
  path: '/',
  component: Home
},{
  path: '/about',
  component: Home
}];


const MapRoutes = function (route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} />
      )}
    />
  );
}


const createRoutes = () => (<Router>
  <Switch>
  {routes.map((route, i) => (
    <MapRoutes key={i} {...route} />
  ))}
</Switch>
</Router>)
export default createRoutes