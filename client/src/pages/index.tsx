import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Ongs } from "./ongs";

const routes = [
  { path: "/", Page: Home },
  { path: "/ongs", Page: Ongs },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
