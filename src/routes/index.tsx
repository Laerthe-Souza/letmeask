import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AdminRoom } from '../pages/AdminRoom';
import { RoomsList } from '../pages/RoomsList';
import { NewRoom } from '../pages/NewRoom';
import { SignIn } from '../pages/SignIn';
import { Room } from '../pages/Room';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/rooms/list" component={RoomsList} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </BrowserRouter>
  );
};
