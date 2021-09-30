import { Layout } from 'react-admin';
import KartaAppBar from './kartaAppBar';

const KartaLayout = (props) => <Layout {...props} appBar={KartaAppBar} />;

export default KartaLayout;