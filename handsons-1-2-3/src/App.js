
import './App.css';

import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import { CalculateScore } from './components/CalculateScore';
function App() {
  return (
    /*
      Handsons 1
      <div className ="App">
      <h1>Welcome the first session of React </h1>
      </div>
    */
    /*Handsons 2- student app 

    <div className ="App">
    <Home/>
    <About/>
    <Contact/>
    </div>
    */

    /*Handsons 3- Calculate Score*/
   <div className="App">
     <CalculateScore 
            Name={"Steeve"}
            School={"DNV Public School"}
            total={284}
            goal={3}
     />
   </div>
  );
}

export default App;
