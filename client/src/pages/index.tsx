import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Ongs } from "./ongs";

const routes = [
<<<<<<< HEAD
  { path: "/home", Page: Home },
  { path: "/organizations", Page: Home },
  { path: "/profile", Page: Home },
=======
  { path: "/", Page: Home },
  { path: "/ongs", Page: Ongs },
>>>>>>> 052ee0283af70cdb5c5b8f76cfde2eee24997152
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
