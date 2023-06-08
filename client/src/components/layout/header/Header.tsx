import { Account } from "./account";
import styles from "./Header.module.scss";

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header style={{ background: "black" }}>
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
