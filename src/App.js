import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={["/", "/login"]}>
          <Login />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
