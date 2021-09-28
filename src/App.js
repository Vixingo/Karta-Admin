import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import WorkIcon from '@material-ui/icons/Work';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { UserCreate, UserEdit, UserList } from './users';
import { CardList } from './cards';
import { PartnerList } from './partners';
import { ProgramList } from './programs';
import dashboard from './dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin title="Karta Admin" dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider} disableTelemetry>
      <Resource name="cards" list={CardList} icon={CardGiftcardIcon} />
      <Resource name="partners" list={PartnerList} icon={WorkIcon} />
      <Resource name="programs" list={ProgramList} icon={LoyaltyIcon} />
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>
  );
  
export default App;
