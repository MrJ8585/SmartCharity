import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Organizations } from "./organizations/Oranizations";
import { Profile } from "./profile/Profile";

const routes = [
  { path: "/home", Page: Home },
  { path: "/organizations", Page: Organizations },
  { path: "/profile", Page: Profile },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
