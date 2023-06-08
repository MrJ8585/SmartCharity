import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";
import { Orgnization } from "./indOrg";
import { ReadState } from "./test";

const routes = [
  { path: "/home", Page: Home },
  { path: "/organizations", Page: Home },
  { path: "/profile", Page: Profile },
  { path: "/org/id", Page: Orgnization },
  { path: "/test", Page: ReadState },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
