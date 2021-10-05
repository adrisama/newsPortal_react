import { Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <switch>
          <Route path="/" exact>
            <HomePage category='general' heading='Top Headlines'/>
          </Route>
          <Route path="/business" exact>
            <HomePage category='business' heading='Business'/>
          </Route>
          <Route path="/entertainment" exact>
            <HomePage category='entertainment' heading='Entertainment'/>
          </Route>
          <Route path="/sports" exact>
            <HomePage category='sports' heading='Sports'/>
          </Route>
          <Route path="/health" exact>
            <HomePage category='health' heading='Health'/>
          </Route>
          <Route path="/technology" exact>
            <HomePage category='technology' heading='Technology'/>
          </Route>
        </switch>
      </Layout>
    </div>
  );
}

export default App;
