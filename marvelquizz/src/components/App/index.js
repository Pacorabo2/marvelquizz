import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import '../../App.css';


function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Login/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
