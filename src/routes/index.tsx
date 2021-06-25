import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AdminRoom } from '../pages/AdminRoom';

import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { SignIn } from '../pages/SignIn';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </BrowserRouter>
  );
};
