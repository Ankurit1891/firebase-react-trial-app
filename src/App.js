import {getDatabase,ref,set} from 'firebase/database';
import {app} from './firebase';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import './App.css';

const db=getDatabase(app);
const auth=getAuth(app);

function App() {
  const signUpUser=()=>{
    createUserWithEmailAndPassword(auth,'ankurit@1891.com','Ankurit').then((val)=>console.log(val));
  }

  const putData=()=>{
    set(ref(db,'users/bhakta'),{
      id:2,
      name:'Bhakta',
      age:23,
    });
  }

  return (
    <div className="App">
    <h1>Firebase app</h1>
    <button onClick={putData}>Put Data</button> 
    <button onClick={signUpUser}>Create User</button> 
    </div>
  );
}

export default App;
