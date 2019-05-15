import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';



/*

---------- helpers ----------

*/
//import AppliedRoute from './AppliedRoute';
//import AuthenticatedRoute from './AuthenticatedRoute';
//import UnauthenticatedRoute from './UnauthenticatedRoute';



/*

---------- routes ----------

*/
const PlaygroundAndParkInspectionForm = lazy(() => import('../components/PlaygroundAndParkInspectionForm/PlaygroundAndParkInspectionForm'));

const RoutesList = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {/*<AuthenticatedRoute path="/inspection-forms/playground-and-park" component={PlaygroundAndParkInspectionForm} />*/}
      <Route path="/inspection-forms/playground-and-park" component={PlaygroundAndParkInspectionForm} />
    </Switch>
  </Suspense>
);

export default RoutesList;