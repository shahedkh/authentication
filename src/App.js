import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={!authCtx.isLoggedIn && <AuthPage />} />
        <Route
          path="/profile"
          element={authCtx.isLoggedIn && <UserProfile />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
