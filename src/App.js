import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()
  // const [user, setUser] = useState({
  //   displayName: "David Rakosi",
  //   email: "david@cleverprogrammer.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL: "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg"
  // })

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        console.log(result);
        setUser(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" style={{height: '150px', paddingRight:'30px', paddingTop:'200px'}}/>
              <button onClick={handleLogin} style={{marginBottom:'300px'}}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;