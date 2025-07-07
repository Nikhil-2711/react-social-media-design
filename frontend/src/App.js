import './App.css';
import Friendlist from './components/friendlist/friendlist';
import Header from './components/header/header';
import Feed from './components/main_feed/feed';
import Profile from './components/profile_section/profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Profile />
          </div>
          <div className='col-md-6'>
            <Feed />
          </div>
          <div className='col-md-3'>
            <Friendlist />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
