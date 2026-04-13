import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import AddJournelPage from "./pages/addJournelPage";
import JournelPage from "./pages/jounelPage";
import Recall from "./pages/Recall";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddNewRecall from "./pages/AddNewRecall";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import PrivateRoute from "./routes/PrivateRoute";
import { LoginProvider } from "./context/LoginContext";
import { useLoader } from "./context/LoaderContext";
import Loader from "./components/Loader";

function App() {
  const { loading } = useLoader();
  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <LoginProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<HomePage />} />
              <Route
                path="recall"
                element={
                  <PrivateRoute>
                    <Recall />
                  </PrivateRoute>
                }
              />
              <Route
                path="recall/newrecall"
                element={
                  <PrivateRoute>
                    <AddNewRecall />
                  </PrivateRoute>
                }
              />
              <Route
                path="journel"
                element={
                  <PrivateRoute>
                    <JournelPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="journel/add"
                element={
                  <PrivateRoute>
                    <AddJournelPage />
                  </PrivateRoute>
                }
              />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route
              path="/auth/register/success"
              element={<RegistrationSuccess />}
            />
          </Routes>
        </LoginProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
