import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import WorkIcon from '@material-ui/icons/Work';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { UserCreate, UserEdit, UserList, UserShow } from './users';
import { CardEdit, CardList, CardShow } from './cards';
import { PartnerCreate, PartnerEdit, PartnerList, PartnerShow } from './partners';
import { ProgramCreate, ProgramEdit, ProgramList, ProgramShow } from './programs';
import dashboard from './dashboard';
import authProvider from './authProvider';
import KartaLayout from './kartaLayout';

const dataProvider = jsonServerProvider('http://localhost:3004');

const App = () => (
    <Admin 
      layout={KartaLayout}
      title="Karta Admin" 
      dashboard={dashboard} 
      authProvider={authProvider} 
      dataProvider={dataProvider} disableTelemetry
    >
      <Resource name="cards" list={CardList}show={CardShow} edit={CardEdit} icon={CardGiftcardIcon} />
      <Resource name="partners" list={PartnerList} show={PartnerShow} edit={PartnerEdit} create={PartnerCreate} icon={WorkIcon} />
      <Resource name="programs" list={ProgramList} show={ProgramShow} edit={ProgramEdit} create={ProgramCreate} icon={LoyaltyIcon} />
      <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>
  );
  
export default App;
