import {
  Text,
  Flex,
  Spacer,
  Center,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Account } from "./account";
// Kaiku Manga

type Pages = "home" | "organizations" | "profile";

type Props = {
  isAccountVisible: boolean;
  selectedPage?: Pages;
};

function HeaderBtn({ title, route }: any) {
  return (
    <Button variant="outline" color="white">
      <Link to={route}>{title}</Link>
    </Button>
  );
}

function Header({ isAccountVisible, selectedPage }: Props) {
  return (
    <Flex background="black" padding="10px 30px">
      <Center>
        <Text fontSize="3xl" color="white">
          SmartCharity
        </Text>
      </Center>
      <Spacer />
      <Center>
        <ButtonGroup>
          <HeaderBtn title="Home" route="/home" />
          <HeaderBtn title="Organizations" route="/organizations" />
          <HeaderBtn title="Profile" route="/profile" />
        </ButtonGroup>
      </Center>
      <Spacer />
      {isAccountVisible && <Account />}
    </Flex>
  );
}

export { Header };
