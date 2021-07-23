import ProfilePhoto from './Components/Profile/ProfilePhoto.js';
import FullName from './Components/Profile/FullName.js';
import Address from './Components/Profile/Address.js';

function App() {
  return (
    <div className="container">
      <ProfilePhoto/>
      <div>
        <FullName/>
        <Address/>
      </div>
    </div>
  );
}

export default App;
