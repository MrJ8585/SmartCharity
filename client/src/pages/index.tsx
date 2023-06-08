/** @format */

import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Organizations } from "./organizations/Oranizations";
import { Profile } from "./profile/Profile";
import { OrgnizationWWF } from "./OrgWwf";
import { OrgnizationCp } from "./OrgCp";
import { OrgnizationDsf } from "./OrgDsf";
import { OrgnizationOnu } from "./OrgOnu";

const routes = [
  { path: "/home", Page: Home },
  { path: "/organizations", Page: Organizations },
  { path: "/profile", Page: Profile },
  { path: "/org/wwf", Page: OrgnizationWWF },
  { path: "/org/4patas", Page: OrgnizationCp },
  { path: "/org/doctorswithoutborders", Page: OrgnizationDsf },
  { path: "/org/unitednations", Page: OrgnizationOnu },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
