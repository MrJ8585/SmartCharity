/** @format */

import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Organizations } from "./organizations/Organizations";
import { Profile } from "./profile/Profile";
import { OrganizacionProfile } from "./organizations/[wallet]/OrganizationsProfile";
import { Declare } from "./declare";

const routes = [
  { path: "/home", Page: Home },
  { path: "/organizations", Page: Organizations },
  { path: "/organizations/:id", Page: OrganizacionProfile },
  { path: "/profile", Page: Profile },
  { path: "/declare", Page: Declare },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
