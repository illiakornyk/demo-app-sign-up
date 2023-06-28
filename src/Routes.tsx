import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

interface RouteObject {
  path: string;
  component: React.ComponentType;
}

interface RoutesProps {
  routes: RouteObject[];
}

function Routes({ routes }: RoutesProps) {
  return (
    <ReactRouterRoutes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </ReactRouterRoutes>
  );
}

export default Routes;
