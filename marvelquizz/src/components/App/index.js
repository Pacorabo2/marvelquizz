import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import '../../App.css';


function App() {
  return (
    <div>
      <Header/>

      <Welcome/>
      <Login/>
      <Landing/>
      <SignUp/>

      <Footer/>
    </div>
  );
}

export default App;
