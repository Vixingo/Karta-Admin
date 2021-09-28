import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import WorkIcon from '@material-ui/icons/Work';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { UserCreate, UserEdit, UserList } from './users';
import { CardEdit, CardList } from './cards';
import { PartnerCreate, PartnerEdit, PartnerList } from './partners';
import { ProgramCreate, ProgramEdit, ProgramList } from './programs';
import dashboard from './dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://localhost:3004');

const App = () => (
    <Admin 
      title="Karta Admin" 
      dashboard={dashboard} 
      authProvider={authProvider} 
      dataProvider={dataProvider} disableTelemetry
    >
      <Resource name="cards" list={CardList} edit={CardEdit} icon={CardGiftcardIcon} />
      <Resource name="partners" list={PartnerList} edit={PartnerEdit} create={PartnerCreate} icon={WorkIcon} />
      <Resource name="programs" list={ProgramList} edit={ProgramEdit} create={ProgramCreate} icon={LoyaltyIcon} />
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>
  );
  
export default App;
