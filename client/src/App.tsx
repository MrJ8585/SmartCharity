import { useApi, useAccount } from "@gear-js/react-hooks";
import { Routing } from "pages";
import { withProviders } from "hocs";
import "App.scss";
import { ApiLoader } from "components/loaders";
import { Header } from "components/layout/header/Header";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      <Header isAccountVisible={isAccountReady} />
      <main>{isAppReady ? <Routing /> : <ApiLoader />}</main>
    </>
  );
}

export const App = withProviders(Component);
