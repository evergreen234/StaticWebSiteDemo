import { Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
//import { Article } from './pages/Article';
import { Siv3d1 } from './pages/articles/siv3d/Siv3d1';


function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/siv3d/1' component={Siv3d1} />
    </Layout>
  );
}

export default App;
