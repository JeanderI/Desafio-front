import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";
import { UserProvider } from "./contexts/UserContext";
import { ActionsProvider } from "./contexts/ActionsContext";

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <ActionsProvider>
            <AppRoutes />
          </ActionsProvider>
        </UserProvider>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
