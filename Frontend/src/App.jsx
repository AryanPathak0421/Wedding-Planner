import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./modules/user/routes/user.routes";

function App() {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;