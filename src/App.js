import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import IsAnon from "./components/IsAnon";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import CollectionsPage from "./pages/CollectionsPage";
import ArticlesPage from "./pages/ArticlesPage";
import CigPackDetailsPage from "./pages/CigPackDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/collections"
          element={
            <IsPrivate>
              <CollectionsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/:cigPackId"
          element={
            <IsPrivate>
              <CigPackDetailsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/articles"
          element={
            <IsPrivate>
              <ArticlesPage />
            </IsPrivate>
          }
        />

        <Route
          path="*"
          element={
           
              <HomePage />
        
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
