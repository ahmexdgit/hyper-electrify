import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import DigitalAgencyPage from "./components/Pages/DigitalAgencyPage";
import ServicePage from "./components/Pages/ServicePage";
import ServiceDetailsPage from "./components/Pages/ServiceDetailsPage";
import AboutPage from "./components/Pages/AboutPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
import TeamPage from "./components/Pages/TeamPage";
import TeamDetailsPage from "./components/Pages/TeamDetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout darkMode />}
      >
        <Route
          index
          element={<DigitalAgencyPage darkMode />}
        />
        <Route
          path="about"
          element={<AboutPage darkMode />}
        />
        <Route
          path="service"
          element={<ServicePage />}
        />
        <Route
          path="service/:slug"
          element={<ServiceDetailsPage />}
        />

        <Route
          path="portfolio"
          element={<PortfolioPage />}
        />
        <Route
          path="portfolio/:portfolioDetailsId"
          element={<PortfolioDetailsPage />}
        />

        <Route
          path="team"
          element={<TeamPage />}
        />
        <Route
          path="team/:teamDetailsId"
          element={<TeamDetailsPage />}
        />
        <Route
          path="contact"
          element={<ContactPage />}
        />
      </Route>

      {/* Error Page */}
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default App;
