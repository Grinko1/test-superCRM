import Header from '../components/header/Header';
import { Sidebar } from '../containers/sidebar';
import '../Index.scss';


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
